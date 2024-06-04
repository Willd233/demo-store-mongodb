import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  users() {
    return this.usersService.fillAll();
  }
  @Get(':id')
  filter(@Param('id') id: string) {
    return this.usersService.fillOne(+id);
  }
  @Get(':id/orders')
  getOrder(@Param('id') id: string) {
    return this.usersService.getOrderById(+id);
  }

  @Post()
  create(@Body() users: any) {
    return this.usersService.create(users);
  }
}
