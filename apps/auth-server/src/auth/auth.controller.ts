import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
// import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  // @ApiBody({ type: LoginDto })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res() res: Response) {
    const data = this.authService.login(req.user);
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 30);
    res.cookie('auth', data, { httpOnly: true, expires: expiresDate });
    return res.sendStatus(200);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<User> {
    return this.usersService.create(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('auth', { httpOnly: true });
    return res.sendStatus(200);
  }
}
