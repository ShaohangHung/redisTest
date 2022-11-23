import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PostKeyValueDto {
  @ApiProperty({
    description: 'key',
    example: `test`,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  key: string;

  @ApiProperty({
    description: 'value',
    example: `hello world`,
    required: true,
  })
  @IsNotEmpty()
  value: any;

  @ApiProperty({
    description: 'Set the specified expire time, in seconds.',
    example: 1000,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  seconds?: number;
}
