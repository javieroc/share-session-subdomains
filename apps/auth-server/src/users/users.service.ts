import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create({ password, ...rest }: CreateUserDto): Promise<User> {
    const passwordHash = await bcrypt.hash(password, 10);
    return this.usersRepository.save({
      password: passwordHash,
      ...rest,
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id }});
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email }});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return this.usersRepository.save({
      ...user,
      ...updateUserDto,
    });
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    await this.usersRepository.delete(user.id);
    return user;
  }
}
