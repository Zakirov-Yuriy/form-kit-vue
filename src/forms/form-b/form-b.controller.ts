import { Controller, Post, Body } from '@nestjs/common';
import { FormBDto } from './form-b.dto';
import { FormBService } from './form-b.service';

@Controller('form-b')
export class FormBController {
  constructor(private readonly formBService: FormBService) {}

  @Post()
  submitFormB(@Body() formData: FormBDto) {
    return this.formBService.processForm(formData);
  }
}
