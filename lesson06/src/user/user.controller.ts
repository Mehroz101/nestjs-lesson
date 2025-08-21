import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@Controller('user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @CacheKey('users')
  async getUsers() {
    const data = await this.userService.getAllUsers();
    return {
      success: true,
      data: data
    }
  }
}
