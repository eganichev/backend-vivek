import {
  Controller,
  Get,
  UseGuards,
  Req,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { TokenResponseDto } from './dto/token-response.dto';
import { TokenResponse } from './interfaces/token-response.interface'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiResponse({ status: 200, description: 'redirect to the auth/google/redirect' })
  async googleAuth(@Req() req) {  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  @ApiResponse({ status: 200, type: TokenResponseDto })
  async googleAuthRedirect(@Req() req): Promise<TokenResponse> {
    const { groupId } = req.cookies.queries;
    const user = await this.authService.signInGoogle(req.user, { groupId });
    
    if (!user) throw new HttpException('Person was not found', HttpStatus.NOT_FOUND);

    return this.authService.createToken(user.email, user._id);
  }
}