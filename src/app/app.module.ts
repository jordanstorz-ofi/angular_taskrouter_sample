import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TaskRouterModule } from './task-router/task-router.module';
import { HttpClientModule } from '@angular/common/http';

import { TaskUserService } from './task-user.service';
import { WorkspaceService } from './workspace.service';

import { AppComponent } from './app.component';
import { UserTaskspaceComponent } from './user-taskspace/user-taskspace.component';
import { GemstoneTaskComponent } from './gemstone-task/gemstone-task.component';
import { WorkspaceTasksComponent } from './workspace-tasks/workspace-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTaskspaceComponent,
    GemstoneTaskComponent,
    WorkspaceTasksComponent
  ],
  imports: [
    TaskRouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WorkspaceService,
    TaskUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
