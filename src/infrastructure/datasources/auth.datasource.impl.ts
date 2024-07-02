import { Model } from 'sequelize'
import { BcryptAdapter } from '../../config'
import { UserModel } from '../../data/mysql'
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  User,
} from '../../domain'
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto'
import { Usermapper } from '../mappers/user.mapper'

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashedPassword: string) => boolean

export class AuthDataSourceImpl implements AuthDataSource {
  constructor(
    private readonly hasPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const {
      name,
      email,
      password,
      lastname,
      phone,
      code,
      callAssistance,
      userType,
    } = registerUserDto

    try {
      // console.log(new UserModel().getModel())
      const exists = await UserModel.getModel().findOne({ where: { email } })
      console.log(exists)
      if (exists) throw CustomError.badRequest('User already exists')

      const user = await UserModel.getModel().create({
        name,
        email,
        password: this.hasPassword(password),
        lastname,
        phone,
        code,
        callAssistance,
        userType,
      })
      return Usermapper.userEntityFromObject(user)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    const { email, password } = loginUserDto

    try {
      // console.log(new UserModel().getModel())
      const exists: Model<User> | null = await UserModel.getModel().findOne({
        where: { email },
      })

      if (!exists) throw CustomError.badRequest(`This user isn't valid`)
      if (!this.comparePassword(password, exists.get().password))
        throw CustomError.badRequest(`This password isn't valid`)

      return Usermapper.userEntityFromObject(exists)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
}
