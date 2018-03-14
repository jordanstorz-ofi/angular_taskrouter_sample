export interface Task {
    assignmentStatus: string;
    attributes: [string, any][];
    dateCreated: Date;
    dateUpdated: Date;
    workerSid: string;
    taskSid: string;
}
