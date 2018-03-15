import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskUser } from '../task-user';
import { TaskUserService } from '../task-user.service';

@Component({
  selector: 'app-user-taskspace',
  templateUrl: './user-taskspace.component.html',
  styleUrls: ['./user-taskspace.component.css']
})
export class UserTaskspaceComponent implements OnInit {
  public user: TaskUser;

  constructor(
    private _taskUser: TaskUserService,
  ) { }

  ngOnInit() {
    this._taskUser
      .updateUser_
      .subscribe(user => {
        this.user = user
      });
  }

  login(userId: number): void {
    this._taskUser.login(userId);
  }

  logout(): void {
    this._taskUser.logout(this.user.workerSid);
  }

  acceptReservation() {
    this._taskUser.acceptReservation(this.user.workerSid);
  }

  submitPrice(details: [string,number]) {
    const [taskSid, gemstonePrice] = details;
    this._taskUser.submitPrice(taskSid, gemstonePrice);
  }

}
