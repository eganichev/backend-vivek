import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ApplicationModule } from './app.module';
import { RequestLoggerInterceptor } from './common/interceptors';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { AllExceptionsFilter } from './common/filters';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule, { cors: true });
  app.useGlobalInterceptors(new RequestLoggerInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '/../public'));
  app.setGlobalPrefix('/api/v1');
  const httpRef = app.getHttpServer()
  app.useGlobalFilters(new AllExceptionsFilter(httpRef));

  const options = new DocumentBuilder()
    .setBasePath('/api/v1')
    .setTitle('Vivek Service REST API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(9000);
}

bootstrap();
