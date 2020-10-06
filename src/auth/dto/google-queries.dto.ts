import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GoogleQueriesDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly groupId?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly state?: string;
}
