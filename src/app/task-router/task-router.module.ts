import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerActionService } from './worker-action.service';
import { WorkerStoreService } from './worker-store.service';
import { WorkerEventsService } from './worker-events.service';
import { TwilioService } from './twilio.service';

import { WorkspaceActionService } from './workspace-action.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WorkerActionService,
    WorkerStoreService,
    WorkerEventsService,
    TwilioService,
    WorkspaceActionService
  ]
})
export class TaskRouterModule { }
