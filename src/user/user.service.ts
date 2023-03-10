import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { RabitLogger } from '../utils/logger';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  private readonly logger = new RabitLogger(UserService.name);

  constructor(private readonly repository: UserRepository) {}

  async update(
    info: GraphQLResolveInfo,
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    this.logger.log(`Updating User with id ${where.id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    let user = await this.repository.update({
      data,
      where,
      select: this.getSelect(info),
    });
    this.logger.log(`User updated: ${JSON.stringify(user)}`);
    return user;
  }

  async create(info: GraphQLResolveInfo, data: Prisma.UserCreateInput) {
    this.logger.log(`Creating User with data ${JSON.stringify(data)}`);
    let user = await this.repository.create({
      data,
      select: this.getSelect(info),
    });
    this.logger.log(`User created: ${JSON.stringify(user)}`);
    return user;
  }

  async findOne(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Finding User with id ${id}`);
    try {
      const user = await this.repository.findUnique({
        where: {
          id,
        },
        select: this.getSelect(info),
      });
      this.logger.log(`User: ${JSON.stringify(user)}`);
      if (user == null) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async delete(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Updating isDelete of User with id ${id}`);
    let user = await this.repository.update({
      data: { isDeleted: true },
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`User deleted: ${JSON.stringify(user)}`);
    return user;
  }

  private getSelect(info: GraphQLResolveInfo) {
    return new PrismaSelect(info, {
      defaultFields: {
        User: { id: true },
      },
    }).value.select;
  }
}
