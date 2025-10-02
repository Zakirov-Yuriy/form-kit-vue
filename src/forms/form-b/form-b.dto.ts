import { ApiProperty } from '@nestjs/swagger';

export class FormBDto {
  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;

  @ApiProperty()
  middleName!: string;

  @ApiProperty()
  birthDate!: string;

  @ApiProperty()
  login!: string;

  @ApiProperty()
  email!: string;
}
