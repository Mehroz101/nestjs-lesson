import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);



  private readonly users: any = [
    {
      id: 1,
      name: 'John',
      age: 30
    }, {
      id: 2,
      name: 'Jane',
      age: 25
    }, {
      id: 3,
      name: 'Bob',
      age: 35
    }, {
      id: 4,
      name: 'Alice',
      age: 28
    }
  ]



  getAll() {
    this.logger.log('Fetching all users', UsersService.name); // ✅ simple log
    return this.users
  }

  getOne(id: number) {
    console.log('userid ' + id);
    const user = this.users.find(user => user.id === id)
    if (!user) {
      this.logger.error(`User with id ${id} not found`, '', UsersService.name);
      throw new NotFoundException(`User with id ${id} not found`)
    }
    return user

  }

  create(user: CreateUserDto) {
    this.users.push(user)
    this.logger.log(`User with id ${user.id} created`)
    return this.users;
  }
}
