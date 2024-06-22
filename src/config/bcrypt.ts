import { compareSync, genSaltSync, hashSync } from 'bcrypt'

export class BcryptAdapter {
  static hash(password: string): string {
    const salt = genSaltSync()
    return hashSync(password, salt)
  }
  static compare(password: string, hashedPassword: string): boolean {
    return compareSync(password, hashedPassword)
  }
}
