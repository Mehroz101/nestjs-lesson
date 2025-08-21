import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RedisCacheModule } from 'apps/shared/redis-cache/redis-cache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
