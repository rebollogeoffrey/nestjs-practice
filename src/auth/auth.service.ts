import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from 'src/users/users/users.entity';
import { UsersService } from 'src/users/users.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string): Promise<any> {
    return this.usersService.getUserByEmail(email);
  }

  private hash(password): string {
    return crypto.createHmac('sha256', password).digest('hex');
  }

  /**
   * Try to login the user in parameter.
   * Return an access token if login is successfull otherwise return
   * a 404 status
   * @param user
   */

  public async login(user: UsersEntity): Promise<any | { status: number }> {
    return this.validate(user.email).then((userData) => {
      // user not found or password doesnt match
      if (!userData || userData.password != this.hash(userData.password)) {
        return { status: 404 };
      }

      // user found
      // Give a token composed with the user.email
      const payload = `${userData.email}`;
      const accesToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600, // 3600 secondes = 1 hour
        acces_token: accesToken,
      };
    });
  }

  /**
   * register
user:UserEntity   */
  public register(user: UsersEntity) {
    user.password = this.hash(user.password);
    console.log('user.password :>> ', user.password);
    return this.usersService.saveUser(user);
  }
}
