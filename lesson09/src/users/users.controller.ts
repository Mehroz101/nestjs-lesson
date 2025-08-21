import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }
}
