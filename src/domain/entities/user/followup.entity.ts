import { Appointment } from "../appoinment.entity";
import { Lead } from "../lead.entity";

export class FollowUp {
    constructor(
      public id: string,
      public lead: Lead,
      public comments: string,
      public status: FollowUpStatus, // Enum for follow-up status (e.g., active, paused, completed)
      public appointment?: Appointment, // Optional reference to the Appointment (if any)
    ) {}
  }
  
  export enum FollowUpStatus {
    Active = 'active',
    Paused = 'paused',
    Completed = 'completed'
  }
  