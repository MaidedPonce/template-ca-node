import { Validators } from '../../../config'
import { Role } from '../../entities/user.entity'

export class RegisterUserDto {
  private constructor(
    public email: string,
    public password: string,
    public name: string,
    public lastname: string,
    public phone: string,
    public code: string,
    public callAssistance: string,
    public userType: Role
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const {
      name,
      email,
      password,
      lastname,
      phone,
      code,
      callAssistance,
      userType,
    } = object

    if (!name) return ['Missing name']
    if (!email) return ['Missing email']
    if (!Validators.email.test(email)) return ['Email is not valid']
    if (!password) return ['Missing password']
    if (password.length < 6) return ['Password too short']
    return [
      undefined,
      new RegisterUserDto(
        email,
        password,
        name,
        lastname,
        phone,
        code,
        callAssistance,
        userType
      ),
    ]
  }
}
