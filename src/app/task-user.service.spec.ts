import { TestBed, inject } from '@angular/core/testing';

import { TaskUserService } from './task-user.service';

describe('TaskUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskUserService]
    });
  });

  it('should be created', inject([TaskUserService], (service: TaskUserService) => {
    expect(service).toBeTruthy();
  }));
});
