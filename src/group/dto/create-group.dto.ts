import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateUserDto } from 'user/dto/update-user.dto';

export class CreateGroupDto {
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @ApiProperty()
  readonly subscribers?: UpdateUserDto[];
}
