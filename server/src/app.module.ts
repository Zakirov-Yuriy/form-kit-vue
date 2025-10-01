import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // здесь убираем CorsModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}