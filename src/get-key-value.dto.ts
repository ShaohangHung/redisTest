import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetKeyValueDto {
  @ApiProperty({
    description: 'key',
    example: `test`,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  key: string;
}
