import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/modules/users/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>) { }
  async create(createUserDto: CreateUserDto) {
    const user = this.user.create(createUserDto); // makes entity instance
    return this.user.save(user);                  // persists it in DB
  }
  findAll() {
    return this.user.find();
  }

  findOne(id: string) {
    return this.user.findOne({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.user.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.user.delete(id);
  }
}
