import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { User } from '../user/user.entity';

@Entity()
export class Group extends BaseEntity {
  @Column({ unique: true, length: 255, name: 'name' })
  name: string;

  @ManyToMany(type => User, user => user.assignedGroup)
  subscribers?: User[];
}
