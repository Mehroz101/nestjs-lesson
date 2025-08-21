import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll(): any {
    return [
      {
        name: 'John',
        age: 30,
        city: 'New York'
      },
      {
        name: 'Jane',
        age: 25,
        city: 'Los Angeles'
      },
      {
        name: 'Bob',
        age: 35,
        city: 'Chicago'
      }
    ]
  }
  find(name: string): any {
    return name;

  }
}
