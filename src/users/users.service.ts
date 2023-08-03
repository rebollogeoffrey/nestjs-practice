import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users/users.entity';

import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async getUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<UsersEntity[]> {
    return await this.usersRepository.find({
      select: ['email', 'firstname', 'lastname'],
      where: [{ id: id }],
    });
  }

  async getUserByEmail(email: string): Promise<UsersEntity[]> {
    return await this.usersRepository.find({
      where: [{ email: email }],
    });
  }

  saveUser(user: UsersEntity): Promise<UsersEntity> {
    return this.usersRepository.save(user);
  }

  updateUser(user: UsersEntity) {
    return this.usersRepository.update(user.id, user);
  }

  deleteUser(user: UsersEntity): void {
    return this.usersRepository.delete(user) as unknown as void;
  }
}
