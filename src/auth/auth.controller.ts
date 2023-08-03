import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersEntity } from 'src/users/users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() user: UsersEntity): Promise<any> {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: UsersEntity): Promise<any> {
    console.log('user :>> ', user);
    return this.authService.register(user);
  }
}
