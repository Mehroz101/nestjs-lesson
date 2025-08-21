import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) { }

  @MessagePattern('register')
  register(data: any) {
    return this.service.register(data);
  }

  @MessagePattern('login')
  login(data: any) {
    return this.service.login(data);
  }

  @MessagePattern('profile')
  profile(userId: number) {
    return this.service.profile(userId);
  }
}
