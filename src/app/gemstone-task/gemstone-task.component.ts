import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../task-router/reservation';

@Component({
  selector: 'app-gemstone-task',
  templateUrl: './gemstone-task.component.html',
  styleUrls: ['./gemstone-task.component.css']
})
export class GemstoneTaskComponent implements OnInit {

  @Input() reservation: Reservation;
  constructor() { }

  ngOnInit() {
  }

}
