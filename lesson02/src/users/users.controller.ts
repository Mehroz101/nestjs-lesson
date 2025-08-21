import { Body, Controller, Get, Param, ParseIntPipe, Post, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOne(id);
  }
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
