import { Controller, Post, Body } from '@nestjs/common';
import { FormADto } from './form-a.dto';
import { FormAService } from './form-a.service';

@Controller('form-a')
export class FormAController {
  constructor(private readonly formAService: FormAService) {}

  @Post()
  submitFormA(@Body() formData: FormADto) {
    return this.formAService.processForm(formData);
  }
}
