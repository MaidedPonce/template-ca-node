import { Lead } from "./lead.entity";

export class Appointment {
    constructor(
      public id: string,
      public lead: Lead,
      public date: Date,
      public time: Date,
      public attended: boolean,
    ) {}
  }
  