import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user-type.dto'
import { QueryOrder } from '../common/enums/query-order.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {  }

  async findAll(query: FilterUserDto): Promise<User[]> {
    const { name, orderType = QueryOrder.DESC, orderBy = 'name' } = query;
    const sqlQuery = this.userRepository.createQueryBuilder('users');

    if (name) {
      sqlQuery.andWhere('users.name LIKE :name',
        { name: `%${name}%` });
    }
    const order = {};
    order[`users.${orderBy}`] = orderType || QueryOrder.DESC;

    return sqlQuery
      .orderBy(order)
      .getMany();
  }

  async findById(id: number | string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async update(updateDto: UpdateUserDto, id: number): Promise<User> {
    await this.userRepository.update({ id }, updateDto);
    return this.userRepository.findOne({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}