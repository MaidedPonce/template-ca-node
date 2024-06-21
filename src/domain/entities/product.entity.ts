import { Lead } from "./lead.entity";

export class Product {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public price: number,
      public lead: Lead,
    ) {}
  }
  