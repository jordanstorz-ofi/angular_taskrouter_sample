import { TRWorker } from './worker';
import { Reservation } from './reservation';
import { Task } from './task';

export const Mapping = {

    mapWorker(responseWorker: any): TRWorker {
        const {
            activityName,
            activitySid,
            attributes,
            friendlyName,
            sid
        } = responseWorker;

        return <TRWorker> {
            activityName,
            activitySid,
            attributes,
            friendlyName,
            workerSid: sid
        };
    },

    mapTask(responseTask: any): Task {

        const {
            assignmentStatus,
            attributes,
            dateCreated,
            dateUpdated,
            workerSid,
            sid
        } = responseTask;

        return <Task> {
            assignmentStatus,
            attributes,
            dateCreated,
            dateUpdated,
            workerSid,
            taskSid: sid
        };
    },

    mapReservation(responseReservation: any): Reservation {
        const {
            dateCreated,
            dateUpdated,
            reservationStatus,
            sid,
            workerSid
        } = responseReservation;

        const task = this.mapTask(responseReservation.task);

        return <Reservation> {
            dateCreated,
            dateUpdated,
            reservationStatus,
            reservationSid: sid,
            workerSid,
            task
        };
    }
}
