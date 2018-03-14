import { TestBed, inject } from '@angular/core/testing';

import { WorkerEventsService } from './worker-events.service';

describe('WorkerEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerEventsService]
    });
  });

  it('should be created', inject([WorkerEventsService], (service: WorkerEventsService) => {
    expect(service).toBeTruthy();
  }));
});
