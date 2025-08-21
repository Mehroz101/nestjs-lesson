import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, Logger],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule { }
