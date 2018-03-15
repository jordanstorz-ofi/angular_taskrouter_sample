import { Injectable } from '@angular/core';
import { Twilio } from './twilio';

@Injectable()
export class WorkspaceActionService {

  constructor() { }

  initializeWorkspace(workspaceToken: string): void {
    const workspace = 
      new Twilio.TaskRouter.Workspace(workspaceToken);
  }

}
