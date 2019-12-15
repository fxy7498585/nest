import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): any{
    return [
      {id: 1001, name: 'bob'},
      {id: 1002, name: 'cindy'},
      {id: 1003, name: 'alla'},
    ];
    // return {name: 'alllllllla'};
  }
}
