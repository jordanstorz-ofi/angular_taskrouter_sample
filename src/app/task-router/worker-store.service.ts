import { Injectable } from '@angular/core';
import { WorkerEventsService } from './worker-events.service';

@Injectable()
export class WorkerStoreService {

  private _workers: any[] = [];
  constructor(
    private _workerEvents: WorkerEventsService
  ) { 
    this.activateSubscriptions();
  }

  activateSubscriptions(): void {
    this._workerEvents.workerReady_
      .subscribe(worker => 
        this.printNewState(worker, this.upsertWorker));

    this._workerEvents.workerActivityUpdated_
      .subscribe(worker => 
        this.printNewState(worker, this.upsertWorker));

  }

  printNewState(
    worker: any,
    transformerFn: (worker: any, storeWorkers: any[]) => any[]
  ): void {
    const newStore = transformerFn(worker, this._workers);
    this._workers = newStore;
  }

  findWorkerBySid(workerSid: string): any {
    const worker = this._workers.find(wkr => wkr.workerSid === workerSid);
    return worker;
  }

  upsertWorker(worker: any, storeWorkers: any[]): any[] {
    const result = 
      storeWorkers
        .filter(wkr => wkr.workerSid === worker.workerSid);
    
    result.push(worker);

    return result;
  }

}
