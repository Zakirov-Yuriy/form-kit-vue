import { Controller, Post, Body, Logger } from '@nestjs/common';
import { FormBService } from './form-b.service';
import { FormB } from './form-b.dto';

@Controller('form/b')
export class FormBController {
  private readonly logger = new Logger(FormBController.name);

  constructor(private readonly formBService: FormBService) {}

  @Post()
  submitFormB(@Body() data: FormB): { requestId: string; classifier: string } | { error: string } {
    this.logger.log('Received Form B data:', data);
    return this.formBService.submitFormB(data);
  }
}
