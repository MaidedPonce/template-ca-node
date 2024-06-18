import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')
const User = sequelize.define('User', {
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
  userType: DataTypes.STRING,
})
