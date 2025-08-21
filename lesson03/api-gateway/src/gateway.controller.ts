import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from './shared/constants';

@Controller()
export class GatewayController {
  constructor(
    @Inject(SERVICES.USERS) private readonly usersClient: ClientProxy, // 👈 MATCHES!
  ) { }

  @Post('register')
  register(@Body() body: any) {
    return this.usersClient.send('register', body); // ✅ Message pattern: 'register'
  }
}
