import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // /users
  getAll() {
    return this.usersService.findAll();
  }
  @Get('user') // /users/user?role=user
  findByRole(@Query('role') role: string) {
    return this.usersService.findByRole(role);
  }
  @Get(':id') // /users/1
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post() // /users
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }
  @Patch(':id') // /users/1
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }
  @Delete(':id') // /users/1
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
