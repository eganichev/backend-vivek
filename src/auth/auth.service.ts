import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JWT_SECRET, JWT_EXPIRES } from '../config';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { GoogleUser } from '../user/user.service';
import { GoogleQueriesDto } from './dto/google-queries.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ) {}

  async createToken(email: string, id: number | string) {
    const token = jwt.sign({ email, id }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    return {
      expires_in: JWT_EXPIRES,
      access_token: token,
    }
  }

  async signInGoogle(profile: any, additionalData: Pick<GoogleQueriesDto, 'groupId'>): Promise<GoogleUser> {
    const { id, name, emails } = profile;
    const { groupId } = additionalData;

    const existingUser = await this.userRepository.update({ googleId: id }, groupId ? {groupId} : {});

    if (existingUser) {
      return existingUser;
    }

    const user = await this.userRepository.save({ ...new User(), id, name, emails })
    return user;
  }
}
