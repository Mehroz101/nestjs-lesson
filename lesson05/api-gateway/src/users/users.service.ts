import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject("USERS_SERVICE") private readonly usersClient: ClientProxy) { }

  getHello() {
    return this.usersClient.send("user.hello", {
      
    });
  }
  create(createUserDto: CreateUserDto) {
    return this.usersClient.send("create_user", createUserDto);
  }

  findAll() {
    return this.usersClient.send("find_all_users", {});
  }

  findOne(id: number) {
    return this.usersClient.send("find_one_user", { id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersClient.send("update_user", { id, ...updateUserDto });
  }

  remove(id: number) {
    return this.usersClient.send("remove_user", { id });
  }
}
