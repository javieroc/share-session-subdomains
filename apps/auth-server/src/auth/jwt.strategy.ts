import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Auth } from './dto/auth.dto';
import { UsersService } from '../users/users.service';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest:ExtractJwt.fromExtractors([(request: Request) => {
        const data: LoginResponseDto = request?.cookies["auth"];
        if(!data){
          return null;
        }
        return data.access_token;
      }]),
    });
  }

  async validate(payload: Auth) {
    const user = await this.usersService.findOne(payload.id);
    return user;
  }
}
