import { Sequelize } from 'sequelize'
import { CustomError } from '../../domain'

interface Options {
  host: string
  user: string
  password: string
  port: number
  database: string
}

export class MySqlDataBase {
  static async connect(options: Options) {
    try {
      const { host = 'mydb', user, password, port, database } = options
      console.log(options)
      const sequelize = new Sequelize(database, user, password, {
        host,
        port,
        dialect: 'mysql',
        logging: console.log,
      })

      try {
        await sequelize.authenticate().then(() => {
          console.log('Sequelize connection established successfully.')
        })
      } catch (error) {
        throw CustomError.unauthorized(
          `Unable to connect to the database: ${error}`
        )
      }

      return sequelize
    } catch (error) {}
  }
}
