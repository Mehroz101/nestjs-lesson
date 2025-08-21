import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../shared/constants';
import { LoginDto } from '../shared/dto/auth.dto';
@Injectable()
export class UsersService {
  private users: any = [];

  async register(data: any) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = { id: Date.now(), ...data, password: hashed };
    this.users.push(user);
    return { message: 'User registered' };
  }

  async login(data: LoginDto) {
    const user = this.users.find(u => u.email === data.email);
    if (user && await bcrypt.compare(data.password, user.password)) {
      const token = jwt.sign({ sub: user.id, email: user?.email }, JWT_SECRET);
      return { access_token: token };
    }
    throw new Error('Invalid credentials');
  }

  async profile(userId: number) {
    return this.users.find(u => u.id === userId);
  }
}
