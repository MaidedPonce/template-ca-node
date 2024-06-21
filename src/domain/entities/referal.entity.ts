import { Lead } from "./lead.entity";

export class Referral {
    constructor(
      public id: string,
      public lead: Lead, // Reference to the Lead who provided the referral
      public name: string,
      public phone: string,
      public comments?: string,
    ) {}
  }
  