import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly service: ProductsService) { }

  @MessagePattern('get_products')
  getProducts() {
    return this.service.findAll();
  }
}
