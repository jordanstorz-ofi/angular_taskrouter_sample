import { Injectable } from '@angular/core';

@Injectable()
export class WorkerStoreService {

  private _workers: any[] = [];
  constructor() { 
  }


  findWorkerBySid(workerSid: string): any {
    const worker = this._workers.find(wkr => wkr.workerSid === workerSid);
    return worker;
  }

  upsertWorker(worker: any): any[] {
    const result = 
      this._workers.filter(wkr => wkr.workerSid === worker.workerSid);
    
    result.push(worker);

    this._workers = result;
    return this._workers;
  }

}
