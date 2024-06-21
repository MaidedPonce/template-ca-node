import { UserModel } from '../../data/mysql'
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  User,
} from '../../domain'
import { Usermapper } from '../mappers/user.mapper'

export class AuthDataSourceImpl implements AuthDataSource {
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
      const exists = await new UserModel()
        .getModel()
        .findOne({ where: { email } })
      if (exists) throw CustomError.badRequest('User already exists')

      const user = await new UserModel().getModel().create({
        name,
        email,
        password,
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
}
