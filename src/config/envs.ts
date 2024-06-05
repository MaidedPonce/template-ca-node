import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  NODE_LOCAL_PORT: get('NODE_LOCAL_PORT').required().asPortNumber(),
  NODE_DOCKER_PORT: get('NODE_DOCKER_PORT').required().asPortNumber(),
  MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),
  MYSQL_DATABASE: get('MYSQL_DATABASE').required().asString(),
  MYSQL_USER: get('MYSQL_USER').required().asString(),
  MYSQL_HOST: get('MYSQL_HOST').required().asString(),
  MYSQLDB_DOCKER_PORT: get('MYSQLDB_DOCKER_PORT').required().asPortNumber(),
  MYSQL_LOCAL_PORT: get('MYSQL_LOCAL_PORT').required().asPortNumber(),
}
