import { User } from "./user/user.entity";

export class Lead {
    constructor(
      public id: string,
      public user: User,
      public name: string,
      public lastname: string,
      public phone: string,
      public email: string,
      public code?: string,
      public comments?: string,
    ) {}
  }
  