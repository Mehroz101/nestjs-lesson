import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern('users.getUsers')
  async getUsers(): Promise<{ id: number; name: string; email: string }[]> {
    return await this.usersService.getUsers();
  }
}
