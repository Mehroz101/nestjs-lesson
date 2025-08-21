import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cache')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async createChache(@Query('key') key: string, @Query('value') value: string) {
    console.log(key, value)
    await this.appService.setCacheKey(key, value);
    return {
      success: true,
      message: 'cache created',
    }
  }

  @Get("get/:key")
  async getCache(@Param('key') key: string) {
    const value = await this.appService.getCacheKey(key);
    return {
      success: true,
      message: 'cache getted',
      data: value
    }
  }

}

