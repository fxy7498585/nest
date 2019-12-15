import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ArticleController } from './article/article.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import config from './DB/db.config';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, ArticleController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
