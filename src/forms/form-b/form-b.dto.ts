import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, Matches } from 'class-validator';

export class FormBDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  firstName!: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  lastName!: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  middleName!: string;

  @ApiProperty()
  @IsString()
  @Matches(/^\d{2}\.\d{2}\.\d{4}$/)
  birthDate!: string;

  @ApiProperty()
  @IsString()
  @Length(6, 50)
  @Matches(/^[a-zA-Z][a-zA-Z0-9_]*$/)
  login!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;
}
