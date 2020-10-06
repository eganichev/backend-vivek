import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  Patch
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ResponseUserInfoDto } from './dto/response-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { FilterUserDto } from './dto/filter-user-type.dto';

@Controller('user')
@ApiTags('user')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {  }

  @Get()
  @ApiResponse({ status: 200, type: ResponseUserInfoDto, isArray: true })
  fetchAll(@Req() req, @Query() query: FilterUserDto): Promise<ResponseUserInfoDto[]> {
    if (!req.user) throw new HttpException('You not authorized', HttpStatus.BAD_REQUEST);
    return this.userService.findAll(query);
  }

  @Get('/me')
  @ApiResponse({ status: 200, type: ResponseUserInfoDto })
  fetchUserByToken(@Req() req): Promise<User> {
    if (!req.user) throw new HttpException('You not authorized', HttpStatus.BAD_REQUEST);
    const { id } =req.user;
    return this.userService.findById(id);
  }
}
