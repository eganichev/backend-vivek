import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Group } from './group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {  }

  async findAll(): Promise<Group[]> {
    return this.groupRepository.find();
  }

  async findByName(name: string): Promise<Group> {
    return this.groupRepository.findOne({ name });
  }

  create(createGroupDto: CreateGroupDto): Promise<Group> {
    return this.groupRepository.save({
      ...new CreateGroupDto,
    })
  }

  async updateById(id: string | number, updateGroupDto: UpdateGroupDto): Promise<Group> {
    await this.groupRepository.update(id, updateGroupDto);
    return this.groupRepository.findOne(id);
  }

  
}