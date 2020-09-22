import { IsOptional, IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateGroupDto } from '../../group/dto/update-group.dto.ts';

export class UpdateUserDto {
  @IsNumber()
  @ApiProperty()
  readonly id: number;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  @ApiProperty()
  readonly assignedGroups: UpdateGroupDto[];
}
