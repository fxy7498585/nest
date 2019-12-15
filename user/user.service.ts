import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getHello(): string {
    return 'user';
  }

  async getData(params) {
    const {username, password} = params;
    const allUser = await this.userRepository.find();
    const result = allUser.length && allUser.some((item: User) => {
      return item.username === username && item.password === password;
    });
    return result;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
