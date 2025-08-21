
import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: '', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Version('1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @Version('1')
  healthCheck() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
