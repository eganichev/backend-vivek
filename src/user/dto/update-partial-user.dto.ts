import { IsOptional, IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartialUserDto {
  @IsNumber()
  @ApiProperty()
  readonly id: number;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  readonly email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly name?: string;
}
