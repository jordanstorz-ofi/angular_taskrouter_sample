import { Injectable } from '@angular/core';
import { WorkerEventsService } from './worker-events.service';
import { WorkerStoreService } from './worker-store.service';
import { Twilio } from './twilio';

const offlineSid = 'WAb03bda1830874190af3b884ec29712b5';

@Injectable()
export class WorkerActionService {

  constructor(
    private _workerEvents: WorkerEventsService,
    private _workerStore: WorkerStoreService
  ) { }

  initializeWorker(workerToken: string, initActivitySid: string, exitActivitySid: string): void {
    const worker = new Twilio.TaskRouter.Worker(
      workerToken,
      true,
      initActivitySid,
      exitActivitySid
    );

    this._workerStore.upsertWorker(worker);
    this.fetchReservations(worker.workerSid);
    this._workerEvents.initializeWorkerStreams(worker);
  }

  fetchReservations(workerSid: string): void {
    const worker = this._workerStore.findWorkerBySid(workerSid);

    worker.fetchReservations((error, response) => {
      const reservations = response.data;
      reservations.forEach(r => this._workerEvents.emitFetchedReservation(r));
    });
  }

  exitWorker(workerSid: string): void {
    const worker = this._workerStore.findWorkerBySid(workerSid);
    
    worker.fetchReservations((error, response) => {
      const responseReservations = response.data;
      const activeReservation = 
        responseReservations.find(res => res.reservationStatus === 'pending');

      if (activeReservation) {
        activeReservation.reject(offlineSid);
      } else {
        worker.update('ActivitySid', offlineSid);
      }
    });
  }

  acceptCurrentReservation(workerSid: string): void {
    const worker = this._workerStore.findWorkerBySid(workerSid);

    worker.fetchReservations((error, response) => {
      const responseReservations = response.data;
      const pendingReservation = 
        responseReservations.find(res => res.reservationStatus === 'pending');

      if (pendingReservation) {
        pendingReservation.accept();
      }
    });
  }

}
