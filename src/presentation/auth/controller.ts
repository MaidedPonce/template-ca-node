import e, { Request, Response } from "express"
import { AuthRepository, RegisterUserDto } from "../../domain"

export class AuthController {
    constructor(private readonly authRespository: AuthRepository) {
    }

    registerUser = async(req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body)
        if (error) return res.status(400).json({ error })
        // res.json(registerUserDto)
        this.authRespository.register(registerUserDto!).then((user) => res.json(user))
        .catch(error => res.status(500).json(error))
    }
}