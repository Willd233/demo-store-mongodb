import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductsDto } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';
import { Products } from './entities/product.entity';

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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductsDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
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
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
