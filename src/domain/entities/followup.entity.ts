import { Appointment } from "./appoinment.entity";

export class FollowUp {
    constructor(
      public id: string,
      public appointments: Appointment[] = [],
    ) {}
  }
  