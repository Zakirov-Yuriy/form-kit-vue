import { Controller, Post, Body, Logger } from '@nestjs/common';
import { FormADto } from './form-a.dto';

@Controller('form-a')
export class FormAController {
  private readonly logger = new Logger(FormAController.name);

  @Post()
  submitFormA(@Body() formData: FormADto): any {
    this.logger.log('Received Form A submission:');
    this.logger.log(formData);
    return {
      requestId: new Date().getTime().toString(),
      classifier: 'form-a-submission-successful',
    };
  }
}
