import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { RedisCacheModule } from 'apps/shared/redis-cache/redis-cache.module';
// import other modules as needed

@Module({
  imports: [UsersModule, BooksModule, RedisCacheModule],
})
export class AppModule {

}
