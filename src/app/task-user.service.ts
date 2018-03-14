import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TaskUser } from './task-user';
import { Reservation } from './task-router/reservation';
import { WorkerActionService } from './task-router/worker-action.service';
import { WorkerEventsService } from './task-router/worker-events.service';
import { _ } from 'lodash';

const loginEndpoint = 'http://ad9090c1.ngrok.io/api/users/login';
const idleSid = 'WA79d87ae3e39b117beb1e98cffae2d422';
const offlineSid = 'WAb03bda1830874190af3b884ec29712b5';

@Injectable()
export class TaskUserService {

  public currentUser: TaskUser = { 
    username: null,
    workerSid: null,
    pendingReservation: null,
    isLoggedIn: false } as TaskUser;

  public updateUser_: BehaviorSubject<TaskUser> = new BehaviorSubject<TaskUser>(this.currentUser);

  constructor(
    private _http: HttpClient,
    private _workerEvents: WorkerEventsService,
    private _workerAction: WorkerActionService
  ) {
    this.updateUser_.next(this.currentUser);
    this.activateSubscriptions();
   }

  login(userId: number) {
    const requestBody = userId;
    this._http.post<any>(loginEndpoint, requestBody)
      .subscribe(response => {
        const workerToken = response.capability;
        const newCurrentUser = {
          username: response.username,
          userid: response.userid,
          workerSid: response.workerSid,
          pendingReservation: null,
          isLoggedIn: false
        } as TaskUser

        this._workerAction.initializeWorker(response.capability, idleSid, offlineSid);
        this.currentUser = newCurrentUser;
        this.updateUser_.next(newCurrentUser);
      });
  }

  activateSubscriptions() {
    this._workerEvents
      .workerReady_
      .subscribe(worker => {
        this.updateIsLoggedIn(true);
      });
      
    this._workerEvents
      .reservationCreated_
      .subscribe(rsrv => {
        this.updatePendingReservation(rsrv);
      });

    this._workerEvents
      .reservationRejected_
      .subscribe(rsrv => {
        this.updateRejectedReservation(rsrv);
      });
  }

  updateIsLoggedIn(loggedIn) {
    this.currentUser.isLoggedIn = loggedIn;
  }

  updatePendingReservation(reservation: Reservation) {
    this.currentUser.pendingReservation = reservation;
    this.updateUser_.next(this.currentUser);
  }

  updateRejectedReservation(reservation: Reservation) {
    const currentRes = this.currentUser.pendingReservation;
    if (currentRes.reservationSid === reservation.reservationSid) {
      this.currentUser.pendingReservation = <Reservation> {};
    }
    this.updateUser_.next(this.currentUser);
  }

}
