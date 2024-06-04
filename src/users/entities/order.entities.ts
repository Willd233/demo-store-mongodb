import { Products } from 'src/products/entities/product.entity';
import { Users } from './users.entity';

export class Order {
  date: Date;
  user: Users;
  product: Products[];
}
