import { Body, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('user.hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern('create_user')
  createUser(@Body() createUserDto): string {
    return this.appService.createUser(createUserDto);
  }
}
