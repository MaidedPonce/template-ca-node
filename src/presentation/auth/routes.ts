import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router()

        const database = new AuthDataSourceImpl()
        const authRespository = new AuthRepositoryImpl(database)
        const controller = new AuthController(authRespository)
        router.post('/register', controller.registerUser)
        return router
    }
}