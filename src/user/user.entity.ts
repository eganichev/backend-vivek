import { Entity, Column, ManyToMany } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';
import { Group } from '../group/group.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true, length: 255, name: 'email' })
  email: string;

  @Column({ length: 255, nullable: true, name: 'name' })
  name: string;

  @ManyToMany(type => Group, group => group.subscribers)
  assignedGroup?: Group[];
}
