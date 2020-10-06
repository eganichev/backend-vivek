import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponseDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly success: boolean;
}
