import { Controller, Get, Post, Body, Inject, Req, UseGuards } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from './shared/constants';
import { RegisterDto, LoginDto } from './shared/dto/auth.dto';
import { AuthMiddleware } from './auth.middleware';

@Controller()
export class GatewayController {
  constructor(
    @Inject(SERVICES.USERS) private usersClient: ClientProxy,
    @Inject(SERVICES.PRODUCTS) private productsClient: ClientProxy,
  ) { }

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.usersClient.send('register', body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.usersClient.send('login', body);
  }

  @Get('profile')
  @UseGuards(AuthMiddleware)
  profile(@Req() req) {
    return this.usersClient.send('profile', req.user.sub);
  }

  @Get('products')
  @UseGuards(AuthMiddleware)
  products() {
    return this.productsClient.send('get_products', {});
  }
}
