import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

import { Mapping } from './mapping';

import { TRWorker } from './worker';
import { Reservation } from './reservation';
import { Task } from './task';

@Injectable()
export class WorkerEventsService {

  public workerReady_: Subject<TRWorker> = new Subject<TRWorker>();
  public workerActivityUpdated_: Subject<TRWorker> = new Subject<TRWorker>();
  public reservationCreated_: Subject<Reservation> = new Subject<Reservation>();
  public reservationRejected_: Subject<Reservation> = new Subject<Reservation>();
  public reservationAccepted_: Subject<Reservation> = new Subject<Reservation>();

  constructor() { }

  initializeWorkerStreams(worker: any): void {
    worker.on('ready', webWorker => {
      const worker = Mapping.mapWorker(webWorker);
      this.workerReady_.next(worker);
    });

    worker.on('activity.update', webWorker => {
      const worker = Mapping.mapWorker(webWorker);
      this.workerActivityUpdated_.next(worker);
    });
    
    worker.on('reservation.created', webReservation => {
      const reservation = Mapping.mapReservation(webReservation);
      this.reservationCreated_.next(reservation);
    });

    worker.on('reservation.rejected', webReservation => {
      const reservation = Mapping.mapReservation(webReservation);
      this.reservationRejected_.next(reservation);
    });

    worker.on('reservation.accepted', webReservation => {
      const reservation = Mapping.mapReservation(webReservation);
      this.reservationAccepted_.next(reservation);
    });
  }

  emitFetchedReservation(webReservation: any): void {
    const reservation = Mapping.mapReservation(webReservation);
    switch (reservation.reservationStatus) {
      case 'pending': this.reservationCreated_.next(reservation); break;
      case 'rejected': break;
      case 'accepted': this.reservationAccepted_.next(reservation); break;
    };
  }

}
