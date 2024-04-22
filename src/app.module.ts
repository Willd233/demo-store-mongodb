import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './modules/categories/categories.controller';
import { ProductsController } from './modules/products/products.controller';
import { UsersController } from './modules/users/users.controller';
import { BrandService } from './modules/brand/brand.service';
import { CategoriesService } from './modules/categories/categories.service';
import { UsersService } from './modules/users/users.service';
import { ProductsService } from './modules/products/products.service';
import { CustormersController } from './modules/customers/customers.controller';
import { CustormersService } from './modules/customers/customers.service';
import { OrdersController } from './modules/orders/orders.controller';
import { OrdersService } from './modules/orders/orders.service';
import { BrandController } from './modules/brand/brand.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    BrandController,
    CategoriesController,
    ProductsController,
    UsersController,
    CustormersController,
    OrdersController,
  ],
  providers: [
    AppService,
    BrandService,
    CategoriesService,
    UsersService,
    ProductsService,
    CustormersService,
    OrdersService,
  ],
})
export class AppModule {}
