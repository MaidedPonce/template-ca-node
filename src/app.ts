import { envs } from './config'
import { MySqlDataBase } from './data/mysql'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'
;(() => {
  main()
})()

async function main() {
  await MySqlDataBase.connect({
    host: envs.MYSQL_HOST,
    user: envs.MYSQL_USER,
    password: envs.MYSQL_ROOT_PASSWORD,
    port: envs.MYSQL_LOCAL_PORT,
    database: envs.MYSQL_DATABASE,
  })

  new Server({ port: envs.NODE_DOCKER_PORT, routes: AppRoutes.routes }).start()
}
