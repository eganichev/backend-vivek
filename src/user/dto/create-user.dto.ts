import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateGroupDto } from '../../group/dto/update-group.dto';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @ApiProperty()
  readonly assignedGroups: UpdateGroupDto[];
}
