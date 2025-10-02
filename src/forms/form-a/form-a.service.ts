import { Injectable, Logger } from '@nestjs/common';
import { FormADto } from './form-a.dto';

@Injectable()
export class FormAService {
  private readonly logger = new Logger(FormAService.name);

  processForm(formData: FormADto) {
    this.logger.log('Processing Form A submission:');
    this.logger.log(formData);
    return {
      requestId: new Date().getTime().toString(),
      classifier: 'form-a-submission-successful',
    };
  }
}
