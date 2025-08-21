import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'iPhone', price: 1000 },
    { id: 2, name: 'MacBook', price: 2000 },
  ];

  findAll() {
    return this.products;
  }
}
