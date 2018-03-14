import { Reservation } from './task-router/reservation';

export interface TaskUser {
    username: string;
    workerSid: string;
    pendingReservation: Reservation;
    isLoggedIn: Boolean;
}
