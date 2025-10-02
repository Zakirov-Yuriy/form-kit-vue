import { ApiProperty } from '@nestjs/swagger';

export class FormADto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty()
  inn: string;

  @ApiProperty()
  phone: string;
}
