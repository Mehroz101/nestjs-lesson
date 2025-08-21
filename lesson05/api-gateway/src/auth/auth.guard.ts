import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const rpcContext = context.switchToHttp().getRequest();
    const token = rpcContext.headers['authorization'];
    console.log(token);
    if (token) {
      return true;
    } else {
      throw new UnauthorizedException('token not found');
    }
  }
}
