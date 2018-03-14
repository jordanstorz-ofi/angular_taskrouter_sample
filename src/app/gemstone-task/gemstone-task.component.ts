import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task-router/task';

@Component({
  selector: 'app-gemstone-task',
  templateUrl: './gemstone-task.component.html',
  styleUrls: ['./gemstone-task.component.css']
})
export class GemstoneTaskComponent implements OnInit {

  @Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}
