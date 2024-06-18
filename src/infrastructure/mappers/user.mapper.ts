import { CustomError, User } from '../../domain'

export class Usermapper {
  static userEntityFromObject(obj: { [key: string]: any }): User {
    const {
      id,
      name,
      lastname,
      email,
      phone,
      code,
      password,
      callAssistance,
      userType,
    } = obj

    if (!id) {
      throw CustomError.badRequest('User id is required')
    }

    if (!name) throw CustomError.badRequest('User name is required')
    if (!lastname) throw CustomError.badRequest('lastname name is required')
    if (!email) throw CustomError.badRequest('email name is required')
    if (!phone) throw CustomError.badRequest('phone name is required')
    if (!code) throw CustomError.badRequest('code name is required')
    if (!password) throw CustomError.badRequest('password name is required')
    if (!callAssistance)
      throw CustomError.badRequest('callAssistance name is required')
    if (!userType) throw CustomError.badRequest('userType name is required')

    return new User(
      id,
      name,
      lastname,
      email,
      phone,
      code,
      password,
      callAssistance,
      userType
    )
  }
}
