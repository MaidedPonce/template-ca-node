import { DataTypes, Sequelize } from 'sequelize'
import { CustomError } from '../../domain'
import { UserModel } from './user.model'

interface Options {
  host: string
  user: string
  password: string
  port: number
  database: string
}

export class MySqlDataBase {
  public static sequelizeInstance: Sequelize

  static async connect(options: Options) {
    try {
      const { host = 'mydb', user, password, port, database } = options
      const sequelize = new Sequelize(database, user, password, {
        host: host,
        port: port,
        dialect: 'mysql',
        logging: console.log,
      })
      try {
        await sequelize
          .authenticate()
          .then(() => {
            this.sequelizeInstance = sequelize
            UserModel.initialize(sequelize)
          })
          .then(() => {
            sequelize.sync({ force: true }).then(() => {
              console.log('Base de datos sincronizada')
            })
          })
      } catch (err) {
        console.error('Unable to connect to the database:', err)
      }
      //return sequelize
    } catch (error) {
      throw new CustomError(500, 'Error connecting to the database')
    }
  }
}
