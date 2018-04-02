import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { Task } from './task-router/task';
import { WorkspaceServiceState } from './workspace-service-state';
import { Gemstone } from './gemstone';
import { TaskAttributes } from './task-attributes';
import { clone } from 'lodash';

const endpoint = 'http://42f354ba.ngrok.io/api/workspaces/login';

@Injectable()
export class WorkspaceService {
  private initialState: WorkspaceServiceState = {
    tasks: []
  } as WorkspaceServiceState;
  public state: WorkspaceServiceState = this.initialState;
  public newState_: BehaviorSubject<WorkspaceServiceState> = 
    new BehaviorSubject<WorkspaceServiceState>(this.initialState);

  constructor(
    private _http: HttpClient
  ) { }

  printNewState(newState: WorkspaceServiceState) {
    this.state = newState;
    this.newState_.next(newState);
  }

  loginWorkspace(): void {
    const requestUrl = 'http://42f354ba.ngrok.io/api/tasks';
    this._http.get<any>(requestUrl)
      .subscribe(response => {
        const tasks = response.map(t => {
          const attributes = JSON.parse(t.attributes);
          console.log(attributes)
          return <Task> {
            assignmentStatus: t.assignment_status,
            dateCreated: t.date_created,
            dateUpdated: t.date_updated,
            workerSid: null,
            taskSid: t.sid,
            attributes: {
              gemstone: {
                hexcolor: attributes.Diamond.HexColor
              } as Gemstone,
              level: attributes.level
            }
          };
        });
        const newState = clone(this.state);
        newState.tasks = tasks;
        this.printNewState(newState);
      });
  }
}
