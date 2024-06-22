import e, { Request, Response } from 'express'
import { AuthRepository, CustomError, RegisterUserDto } from '../../domain'

export class AuthController {
  constructor(private readonly authRespository: AuthRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }

    return res.status(500).json({ error: 'Internal server error' })
  }

  registerUser = async (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body)
    if (error) return res.status(400).json({ error })
    // res.json(registerUserDto)
    this.authRespository
      .register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res))
  }
}
