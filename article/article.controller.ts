import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {

  @Get()
  index() {
    return '我是一个文章页面';
  }

  @Get('add')
  add() {
    return '增加文章';
  }
}
