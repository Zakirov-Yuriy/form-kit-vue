import { Injectable, Logger } from '@nestjs/common';
import { FormBDto } from './form-b.dto';

@Injectable()
export class FormBService {
  private readonly logger = new Logger(FormBService.name);

  processForm(formData: FormBDto) {
    this.logger.log('Processing Form B submission:');
    this.logger.log(formData);
    return {
      requestId: new Date().getTime().toString(),
      classifier: 'form-b-submission-successful',
    };
  }
}
