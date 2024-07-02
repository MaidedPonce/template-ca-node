import e, { Request, Response } from 'express'
import {
  AuthRepository,
  CustomError,
  RegisterUser,
  RegisterUserDto,
} from '../../domain'
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto'
import { LoginUser } from '../../domain/use-cases/auth/login-user.usecase'

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
    /* this.authRespository
      .register(registerUserDto!)
      .then(async (user) =>
        res.json({
          user,
          token: await JwtAdapter.generateToken({ id: user.id }),
        })
      )
      .catch((error) => this.handleError(error, res)) */
    new RegisterUser(this.authRespository)
      .execute(registerUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res))
  }
  loginUser = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body)
    if (error) return res.status(400).json({ error })
    new LoginUser(this.authRespository)
      .execute(loginUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res))
  }
}
