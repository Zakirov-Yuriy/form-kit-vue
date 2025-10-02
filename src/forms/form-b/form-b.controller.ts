import { Controller, Post, Body, Logger } from '@nestjs/common';
import { FormBDto } from './form-b.dto';

@Controller('form-b')
export class FormBController {
  private readonly logger = new Logger(FormBController.name);

  @Post()
  submitFormB(@Body() formData: FormBDto) {
    this.logger.log('Received Form B submission:');
    this.logger.log(formData);
    return {
      requestId: new Date().getTime().toString(),
      classifier: 'form-b-submission-successful',
    };
  }
}
