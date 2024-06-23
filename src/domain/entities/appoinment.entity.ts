import { FollowUp } from "./followup.entity";

export class Appointment {
    constructor(
      public id: string,
      public date: Date,
      public time: Date,
      public attended: boolean,
      public status: Status,
      public followUp: FollowUp,
    ) {}
  }
  export enum Status {
    Active = 'active',
    Paused = 'paused'
  }
  