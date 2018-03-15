import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reservation } from '../task-router/reservation';

@Component({
  selector: 'app-gemstone-task',
  templateUrl: './gemstone-task.component.html',
  styleUrls: ['./gemstone-task.component.css']
})
export class GemstoneTaskComponent implements OnInit {

  @Input() reservation: Reservation;

  @Output() acceptReservation: EventEmitter<Boolean> = 
    new EventEmitter<Boolean>();
  
  @Output() submitPrice: EventEmitter<[string,number]> =
    new EventEmitter<[string,number]>();

  gemstoneValue: number = 0;

  constructor() { }

  ngOnInit() {
  }

  emitAcceptReservation() {
    this.acceptReservation.emit(true);
  }

  emitSubmitPrice() {
    this.submitPrice.emit([this.reservation.task.taskSid, this.gemstoneValue]);
  }

}
