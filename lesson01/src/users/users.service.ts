import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'password789',
      role: 'user',
    },
    {
      id: 4,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'password789',
      role: 'user',
    },
    {
      id: 5,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'password789',
      role: 'user',
    },
  ];

  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  findByRole(role: string) {
    console.log(role);
    const users = this.users.filter((user) => user.role === role);
    if (!users) throw new NotFoundException('User role not found');
    return users;
  }
  create(user: CreateUserDto) {
    const highestId = Math.max(...this.users.map((user) => user.id));
    const newUser = {
      ...user,
      id: highestId + 1,
    };
    this.users.push(newUser);
    return { message: 'User created: ', data: newUser };
  }
  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        console.log('updated user', updatedUser);
        const updateduser = { ...user, ...updatedUser };
        console.log(updateduser);
        return updateduser;
      }
      return user;
    });

    return {
      message: 'User updated',
      data: this.users.find((user) => user.id === id),
    };
  }
  delete(id: number) {
    const deletedUser = this.users.find((user) => user.id === id);
    if (!deletedUser) throw new NotFoundException('User not found');

    this.users = this.users.filter((user) => user.id !== id);

    return { message: 'User deleted: ', data: deletedUser };
  }
}
