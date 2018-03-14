import { Task } from './task';

export interface Reservation {
    dateCreated: Date;
    dateUpdated: Date;
    reservationStatus: string;
    reservationSid: string;
    workerSid: string;
    task: Task;
}
