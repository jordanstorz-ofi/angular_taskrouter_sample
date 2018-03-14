import { TestBed, inject } from '@angular/core/testing';

import { WorkerStoreService } from './worker-store.service';

describe('WorkerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerStoreService]
    });
  });

  it('should be created', inject([WorkerStoreService], (service: WorkerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
