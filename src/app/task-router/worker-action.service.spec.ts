import { TestBed, inject } from '@angular/core/testing';

import { WorkerActionService } from './worker-action.service';

describe('WorkerActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerActionService]
    });
  });

  it('should be created', inject([WorkerActionService], (service: WorkerActionService) => {
    expect(service).toBeTruthy();
  }));
});
