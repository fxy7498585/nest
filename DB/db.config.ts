import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '139.224.27.206',
  port: 3306,
  username: 'nest_admin',
  password: 'fxy7498585',
  database: 'nest_admin',
  entities: [User],
  synchronize: true,
};

export default config;
