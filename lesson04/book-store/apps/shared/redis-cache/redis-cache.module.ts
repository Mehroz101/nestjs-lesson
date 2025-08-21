import { Global, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 60,
    }),
  ],
  exports: [CacheModule],
})
export class RedisCacheModule { }
