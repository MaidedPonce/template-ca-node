export enum Role {
  Enterprising = 'Enterprising',
  Distribuitor = 'Distribuitor',
  Assitant = 'Assitant',
}

export class User {
  constructor(
    public id: string,
    public name: string,
    public lastname: string,
    public email: string,
    public phone: string,
    public code: string,
    public password: string,
    public callAssistance: string,
    public userType: Role
  ) {}
}
