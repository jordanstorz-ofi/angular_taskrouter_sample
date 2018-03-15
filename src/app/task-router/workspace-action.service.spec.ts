import { TestBed, inject } from '@angular/core/testing';

import { WorkspaceActionService } from './workspace-action.service';

describe('WorkspaceActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkspaceActionService]
    });
  });

  it('should be created', inject([WorkspaceActionService], (service: WorkspaceActionService) => {
    expect(service).toBeTruthy();
  }));
});
