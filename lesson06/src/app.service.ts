import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) { }
  async setCacheKey(key: string, value: any) {
    console.log(key, value)
    return await this.cacheManager.set(key, value);
  }
  async getCacheKey(key: string) {
    const res = await this.cacheManager.get(key);
    console.log(res)
    return res
  }

}
