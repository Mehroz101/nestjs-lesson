import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register({
      ttl: 0,
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
