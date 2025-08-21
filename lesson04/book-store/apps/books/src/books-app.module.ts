import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { RedisCacheModule } from 'apps/shared/redis-cache/redis-cache.module';

@Module({
  imports: [BooksModule, RedisCacheModule],
  controllers: [],
  providers: [],
})

export class BooksAppModule { }
