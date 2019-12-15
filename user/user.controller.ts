import { Controller, Get, Render, Post, Body, Request, Response } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async getHello(@Body() params) {
    const result = await this.userService.getData(params);
    console.log('result', result);
    return {
      code: 0,
      login: result ? 'success' : 'fail',
      message: result ? '登录成功' : '用户不存在',
    };
  }

  @Get('find')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
