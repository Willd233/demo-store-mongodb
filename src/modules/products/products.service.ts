import { Injectable } from '@nestjs/common';
import { Products } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Products[] = [
    {
      id: 1,
      name: 'telefono 1',
      price: 250,
      description: 'nuevo',
      image: '#',
      stock: 12,
    },
  ];
  fillAll() {
    return this.products;
  }

  fillOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const productId = this.fillOne(id);
    if (productId) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...productId,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const productId = this.fillOne(id);
    if (productId) {
      const productIndex = this.products.findIndex((item) => item.id === id);

      this.products.splice(productIndex, 1);
    }
    return null;
  }
}
