import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}



    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){
        return await this.authService.login(req.user)
    }

    @Post('register')
    async register(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}
