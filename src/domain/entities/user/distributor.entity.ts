import { Lead } from "../lead.entity";
import { User, UserType } from "./user.entity";

export class Distributor extends User {
    constructor(
      id: string,
      name: string,
      lastname: string,
      email: string,
      phone: string,
      code: string,
      password: string,
      userType: UserType.Distributor,
      public lead: Lead,
    ) {
      super(id, name, lastname, email, phone, code, password, userType);
    }
  }
  