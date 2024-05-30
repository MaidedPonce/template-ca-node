import { createPool } from 'mysql2/promise'

interface Options {
  host: string
  user: string
  password: string
  port: number
}

export class MySqlDataBase {
  static async connect(options: Options) {
    try {
      const { host, user, password, port } = options
      const pool = createPool({
        host,
        user,
        password,
        port,
      })
    } catch (error) {}
  }
}
