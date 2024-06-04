/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  filter(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit}, offset=> ${offset}, brand=>${brand}`,
    // };
    return this.productsService.fillAll();
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return this.productsService.fillOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductsDto) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}
