import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updateAt: Date;
}
