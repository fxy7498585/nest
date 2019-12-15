import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useStaticAssets('public');  // 配置静态资源文件目录
  app.useStaticAssets('public', {
    prefix: '/static/',
  });

  app.setBaseViewsDir('views'); // 配置模板引擎的文件目录
  app.setViewEngine('ejs');  // 配置使用的模板引擎

  app.enableCors();  // 解决跨域
  await app.listen(3000);
}
bootstrap();
