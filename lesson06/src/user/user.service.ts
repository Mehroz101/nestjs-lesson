import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).catch((err) => console.log(err));
    return res;
  }
}
