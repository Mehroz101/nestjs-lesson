import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from './constants';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(@Inject(PRODUCT_SERVICE) private readonly client: ClientProxy) { }

  getAllProducts(): Observable<any> {
    return this.client.send({ cmd: 'get_products' }, {});
  }

  getProductById(id: number): Observable<any> {
    return this.client.send({ cmd: 'get_product_by_id' }, { id });
  }
}
