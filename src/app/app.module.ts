import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskRouterModule } from './task-router/task-router.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskUserService } from './task-user.service';


import { AppComponent } from './app.component';
import { UserTaskspaceComponent } from './user-taskspace/user-taskspace.component';
import { GemstoneTaskComponent } from './gemstone-task/gemstone-task.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTaskspaceComponent,
    GemstoneTaskComponent
  ],
  imports: [
    TaskRouterModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TaskUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
