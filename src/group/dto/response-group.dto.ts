import { ApiProperty } from '@nestjs/swagger';

export class ResponseGroupInfoDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;
}