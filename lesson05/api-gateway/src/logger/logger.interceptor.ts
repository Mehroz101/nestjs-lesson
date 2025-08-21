import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const time = Date.now();
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    return next.handle().pipe(tap(() => console.log(`${method} ${url} ${Date.now() - time}ms`)));
  }
}
