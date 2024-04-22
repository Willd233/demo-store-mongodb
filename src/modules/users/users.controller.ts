import { Controller, Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('user') user = 'wuilliams') {
    return `el usuario es ${user}`;
  }
}
