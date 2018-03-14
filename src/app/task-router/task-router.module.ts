import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerActionService } from './worker-action.service';
import { WorkerStoreService } from './worker-store.service';
import { WorkerEventsService } from './worker-events.service';
import { TwilioService } from './twilio.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WorkerActionService,
    WorkerStoreService,
    WorkerEventsService,
    TwilioService
  ]
})
export class TaskRouterModule { }
