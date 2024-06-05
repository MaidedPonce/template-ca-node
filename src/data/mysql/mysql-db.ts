import { createPool } from 'mysql2/promise'

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
      const pool = createPool({
        host,
        user,
        password,
        port,
        database,
      })
      pool.on('connection', () => console.log('DB CONNECTED'))
    } catch (error) {}
  }
}
