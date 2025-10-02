import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { FormAController } from './forms/form-a/form-a.controller';
import { FormAService } from './forms/form-a/form-a.service';

@Module({
  imports: [
    FormsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, FormAController],
  providers: [AppService, FormAService],
})
export class AppModule {}
