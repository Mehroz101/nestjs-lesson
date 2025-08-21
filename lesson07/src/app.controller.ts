import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { TrimAndUppercasePipe } from './common/custompips/TrimAndUppercasePipe ';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/all")
  getAll(): any {
    return this.appService.getAll();

  }
  @Get("/find/:name")
  find(@Param("name", TrimAndUppercasePipe) name: string): any {
    return this.appService.find(name);
  }

}