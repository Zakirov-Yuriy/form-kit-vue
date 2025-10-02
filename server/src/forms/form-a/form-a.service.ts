import { Injectable, Logger } from '@nestjs/common';
import { FormA } from './form-a.dto';

@Injectable()
export class FormAService {
  private readonly logger = new Logger(FormAService.name);

  submitFormA(data: FormA): { requestId: string; classifier: string } | { error: string } {
    if (Math.random() < 0.8) {
      this.logger.log('Form A data processed:', data);
      return { requestId: `form-a-${Date.now()}`, classifier: 'processed-a' };
    } else {
      this.logger.error('Form A submission failed');
      return { error: 'Что-то пошло не так при отправке формы A' };
    }
  }
}
