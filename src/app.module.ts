import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { ORM_CONFIG } from './config';
import { ErrorsInterceptor } from './common/interceptors';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    }
  ]
})
export class ApplicationModule {  }
