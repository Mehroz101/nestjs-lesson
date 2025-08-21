import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! from  user service';
  }
  createUser(createUserDto: any): any {
    return { ...createUserDto, test: 'test' };
  }
}
