import { Router } from 'express'
import { AuthController } from './controller'
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infrastructure'
import { AuthMiddleware } from '../middlewares/auth.middleware'

export class AuthRoutes {
  static get routes(): Router {
    const router = Router()

    const database = new AuthDataSourceImpl()
    const authRespository = new AuthRepositoryImpl(database)
    const controller = new AuthController(authRespository)
    router.post('/register', controller.registerUser)
    router.post('/login', controller.loginUser)
    return router
  }
}
