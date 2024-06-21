export class User {
    constructor(
      public id: string,
      public name: string,
      public lastname: string,
      public email: string,
      public phone: string,
      public code: string,
      public password: string,
      public userType: UserType,
      
    ) {}
  }
  export enum UserType {
    Entrepreneur = 'entrepreneur',
    Distributor = 'distributor',
    Regular = 'regular'
  }
  