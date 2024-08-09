import { Referral } from "./referal.entity";
import { User } from "./user/user.entity";

export class Lead {
    constructor(
      public id: string,
      public user: User,
      public name: string,
      public lastname: string,
      public phone: string,
      public referral: Referral,
      public email: string,
      public code?: string,
      public comments?: string,
    ) {}
  }
  