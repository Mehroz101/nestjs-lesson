import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly productsService: ProductsService) { }

  @Get('products')
  getProducts() {
    return this.productsService.getAllProducts();
  }
  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id));
  }
}
