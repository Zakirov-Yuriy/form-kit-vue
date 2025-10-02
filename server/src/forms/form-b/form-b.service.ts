import { Injectable, Logger } from '@nestjs/common';
import { FormB } from './form-b.dto';

@Injectable()
export class FormBService {
  private readonly logger = new Logger(FormBService.name);

  submitFormB(data: FormB): { requestId: string; classifier: string } | { error: string } {
    // Имитация успешной отправки
    if (Math.random() < 0.8) {
      this.logger.log('Form B data processed:', data);
      // In a real application, this would involve actual API calls, database operations, etc.
      // For now, we return a mock response.
      return { requestId: `form-b-${Date.now()}`, classifier: 'processed-b' };
    } else {
      this.logger.error('Form B submission failed');
      return { error: 'Что-то пошло не так при отправке формы B' };
    }
  }
}
