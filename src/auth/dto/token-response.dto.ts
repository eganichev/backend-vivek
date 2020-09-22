import { IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto {
  @IsNumberString()
  @ApiProperty()
  readonly expires_in: string | number;

  @IsString()
  @ApiProperty()
  readonly access_token: string;
}
