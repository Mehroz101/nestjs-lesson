import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) { }
  findAll() {
    return this.client.send('users.getUsers', {});
  }
}
