import { Controller, Post, Body, Logger } from '@nestjs/common';
import { FormAService } from './form-a.service';
import { FormA } from './form-a.dto';

@Controller('form/a')
export class FormAController {
  private readonly logger = new Logger(FormAController.name);

  constructor(private readonly formAService: FormAService) {}

  @Post()
  submitFormA(@Body() data: FormA): { requestId: string; classifier: string } | { error: string } {
    this.logger.log('Received Form A data:', data);
    return this.formAService.submitFormA(data);
  }
}
