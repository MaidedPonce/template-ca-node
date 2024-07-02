import {
  AuthDataSource,
  AuthRepository,
  RegisterUserDto,
  User,
} from '../../domain'
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}
  register(registerUserDto: RegisterUserDto): Promise<User> {
    return this.authDataSource.register(registerUserDto)
  }
  login(loginUserDto: LoginUserDto): Promise<User> {
    return this.authDataSource.login(loginUserDto)
  }
}
