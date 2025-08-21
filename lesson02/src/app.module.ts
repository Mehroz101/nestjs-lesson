import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GetIpLogMiddleware } from "./get-ip-log/get-ip-log.middleware"
import { RequestTimerMiddleware } from './request-timer/request-timer.middleware';
import { GetIpLogModule } from './get-ip-log/get-ip-log.module';
@Module({
  imports: [UsersModule, GetIpLogModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetIpLogMiddleware).forRoutes({ path: "/users", method: RequestMethod.GET }).apply(RequestTimerMiddleware).forRoutes('*');
  }

}