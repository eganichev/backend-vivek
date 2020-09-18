import { Catch, HttpServer, Inject, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(@Inject() applicationRef: HttpServer) {
    super(applicationRef);
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = 500;

    if (typeof exception === 'object' && !!exception.status) {
      super.catch(exception, host);
      return;
    }

    response
      .status(statusCode)
      .json({
        statusCode,
        error: String(exception),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
