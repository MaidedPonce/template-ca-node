import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')
export const UserModel = sequelize.define('User', {
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

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log('Base de datos sincronizada')
})
