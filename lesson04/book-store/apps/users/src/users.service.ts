import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
@Injectable()
export class UsersService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }
  private users: { id: number; name: string; email: string }[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
    }
  ];
  async getUsers(): Promise<{ id: number; name: string; email: string }[]> {
    const cacheKey = `all-users`;
    let users = await this.cacheManager.get<{ id: number; name: string; email: string }[]>(cacheKey);

    if (!users) {
      console.log('📦 Fetching user from DB...');
      users = this.users; // simulate DB fetch
      await this.cacheManager.set(cacheKey, users, 60);
    }

    return users;
  }
}
