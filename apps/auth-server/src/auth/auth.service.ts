import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { Auth } from './dto/auth.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  authenticate = async (email: string, password: string): Promise<Auth> => {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new UnauthorizedException();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();

    return { id: user.id, email: user.email };
  };

  login = (payload: Auth): LoginResponseDto => {
    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'bearer',
    };
  }
}
