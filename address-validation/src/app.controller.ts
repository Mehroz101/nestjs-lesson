import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IsNotEmpty, IsString } from 'class-validator';

export class ValidateAddressDto {
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  zipcode: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/validate')
  validateAddress(@Body() dto: ValidateAddressDto) {
    return this.appService.validateAddress(dto.street, dto.city, dto.state, dto.zipcode);
  }
}
