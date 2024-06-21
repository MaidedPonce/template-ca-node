import { DataTypes, Model, ModelCtor } from 'sequelize'

export class UserModel {
  public model!: ModelCtor<Model<any, any>>

  constructor() {}

  initialize(sequelize: any) {
    this.model = sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      code: DataTypes.STRING,
      password: DataTypes.STRING,
      callAssistance: DataTypes.STRING,
      userType: DataTypes.ENUM('Enterprising', 'Distribuitor', 'Assistant'),
    })
    return this.model
  }
  getModel() {
    return this.model
  }
}
