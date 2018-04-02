import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../workspace.service';
import { WorkspaceServiceState } from '../workspace-service-state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-workspace-tasks',
  templateUrl: './workspace-tasks.component.html',
  styleUrls: ['./workspace-tasks.component.css']
})
export class WorkspaceTasksComponent implements OnInit {

  workspaceState: WorkspaceServiceState;
  constructor(
    private _workspaceService: WorkspaceService
  ) { }

  ngOnInit() {
    this._workspaceService
      .newState_
      .pipe(
        map(state => {
          state.tasks = state.tasks.filter(t => t.assignmentStatus !== 'canceled')
          return state;
        })
      )
      .subscribe(state => this.workspaceState = state);

    this.login();
  }

  login(): void {
    this._workspaceService.loginWorkspace();
  }

}
