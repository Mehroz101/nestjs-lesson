import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
    SongsModule,
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60000, // 1 minute
        limit: 30,
      },
      {
        name: 'short',
        ttl: 1000, // 1 second
        limit: 1,
      },
    ]),
    MyLoggerModule,
  ],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
