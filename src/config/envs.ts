import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),
  MYSQL_DATABASE: get('MYSQL_DATABASE').required().asString(),
}
