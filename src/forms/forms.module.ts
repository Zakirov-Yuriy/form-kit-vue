import { Module } from '@nestjs/common';
import { FormAController } from './form-a/form-a.controller';
import { FormBController } from './form-b/form-b.controller';

@Module({
  controllers: [FormAController, FormBController]
})
export class FormsModule {}
