import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';

interface FormAData {
  name: string;
  email?: string;
  inn: string;
  phone: string;
}

interface FormBData {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  login: string;
  email: string;
}

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('form/a')
  submitFormA(@Body() data: FormAData): { requestId: string; classifier: string } | { error: string } {
    // Имитация успешной отправки
    if (Math.random() < 0.8) {
      this.logger.log('Form A data:', data);
      return { requestId: '12345', classifier: 'some-string' };
    } else {
      this.logger.error('Form A error');
      return { error: 'Что-то пошло не так' };
    }
  }

  @Post('form/b')
  submitFormB(@Body() data: FormBData): { requestId: string; classifier: string } | { error: string } {
    // Имитация успешной отправки
    if (Math.random() < 0.8) {
      this.logger.log('Form B data:', data);
      return { requestId: '67890', classifier: 'another-string' };
    } else {
      this.logger.error('Form B error');
      return { error: 'Что-то пошло не так' };
    }
  }
}
