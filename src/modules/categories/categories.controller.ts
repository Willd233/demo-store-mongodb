import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':id/pruducts/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${id} and ${productId}`;
  }
}
