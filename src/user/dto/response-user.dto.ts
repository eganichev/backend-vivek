import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserInfoDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly name: string;
}
