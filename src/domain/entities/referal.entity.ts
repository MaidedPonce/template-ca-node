import { Lead } from "./lead.entity";

export class Referral {
    constructor(
      public id: string,
      public lead: Lead,
      public name: string,
      public phone: string,
      public comments?: string,
      
    ) {}
  }
  