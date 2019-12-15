import { Controller, Get, Query, Request, Post, Body, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @Get()
  @Render('default/index')
  index() {
    return {
      list: this.usersService.findAll(),
    };
  }

  @Get('add')
  addData(@Query() query) {
    console.log(query);
    return query;
  }

  @Get('edit')
  editData(@Request() req) {
    console.log(req.query);
    return '编辑文章';
  }

  @Post('create')
  create(@Body() body) {
    console.log(body);
    console.log('出发了body');
    return body;
  }

}
