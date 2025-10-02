import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class FormADto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  name!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsString()
  @Length(10, 12)
  inn!: string;

  @ApiProperty()
  @IsString()
  @Length(11, 11)
  phone!: string;
}
