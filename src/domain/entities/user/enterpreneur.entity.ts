import { Lead } from "../lead.entity";
import { User, UserType } from "./user.entity";

export class Entrepreneur extends User {
    constructor(
      id: string,
      name: string,
      lastname: string,
      email: string,
      phone: string,
      code: string,
      password: string,
      userType: UserType.Entrepreneur,
      public lead: Lead,
    ) {
      super(id, name, lastname, email, phone, code, password ,userType);
    }
  }
  