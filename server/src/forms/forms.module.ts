import { Module } from '@nestjs/common';
import { FormAController } from './form-a/form-a.controller';
import { FormAService } from './form-a/form-a.service';
import { FormBController } from './form-b/form-b.controller';
import { FormBService } from './form-b/form-b.service';

@Module({
  controllers: [FormAController, FormBController],
  providers: [FormAService, FormBService],
})
export class FormsModule {}
