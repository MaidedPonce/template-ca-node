import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  User,
} from '../../domain'
import { Usermapper } from '../mappers/user.mapper'

export class AuthDataSourceImpl implements AuthDataSource {
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const { name, email, password } = registerUserDto

    try {
      const user = await UserModel.create({
        name,
        email,
        password,
      })
      return Usermapper.userEntityFromObject(user)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
}
