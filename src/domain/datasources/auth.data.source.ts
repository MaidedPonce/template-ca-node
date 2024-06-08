import { RegisterUserDto } from '../dtos/auth/register-user.dto'
import { User } from '../entities/user.entity'

export abstract class AuthDataSource {
  abstract register(registerUserDto: RegisterUserDto): Promise<User>
}
