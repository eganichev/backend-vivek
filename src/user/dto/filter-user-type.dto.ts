import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { QueryOrder } from '../../common/enums/query-order.enum';

export class FilterUserDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly orderBy?: string;

  @IsEnum(QueryOrder)
  @IsOptional()
  @ApiPropertyOptional()
  readonly orderType?: QueryOrder;
}
