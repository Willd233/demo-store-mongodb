import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { ProductsService } from 'src/products/products.service';
import { Order } from './entities/order.entities';

@Injectable()
export class UsersService {
  constructor(private productService: ProductsService) {}
  private counterId = 0;
  private users: Users[] = [];

  fillAll() {
    return this.users;
  }
  fillOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: any) {
    this.counterId++;
    const newUsers = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUsers);
    return newUsers;
  }
  getOrderById(id: number): Order {
    const user = this.fillOne(id);
    return {
      date: new Date(),
      user,
      product: this.productService.fillAll(),
    };
  }
}
