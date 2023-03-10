import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { RabitLogger } from '../utils/logger';
import { RoutineRepository } from './routine.repository';

@Injectable()
export class RoutineService {
  private readonly logger = new RabitLogger(RoutineService.name);

  constructor(private readonly repository: RoutineRepository) {}

  async create(info: GraphQLResolveInfo, data: Prisma.RoutineCreateInput) {
    this.logger.log(`Creating Routine with data ${JSON.stringify(data)}`);
    var createdRoutine = await this.repository.create({
      data,
      select: this.getSelect(info),
    });
    this.logger.log(`Created Routine: ${JSON.stringify(createdRoutine)}`);
    return createdRoutine;
  }

  async update(
    info: GraphQLResolveInfo,
    where: Prisma.RoutineWhereUniqueInput,
    data: Prisma.RoutineUpdateInput,
  ) {
    this.logger.log(`Updating Routine with id ${where.id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var updatedRoutine = await this.repository.update({
      data,
      where,
      select: this.getSelect(info),
    });
    this.logger.log(`Updated Routine: ${JSON.stringify(updatedRoutine)}`);
    return updatedRoutine;
  }

  async delete(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Updating isDelete of Routine with id ${id}`);
    var deletedRoutine = await this.repository.update({
      data: { isDeleted: true },
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`Deleted Routine: ${JSON.stringify(deletedRoutine)}`);
    return deletedRoutine;
  }

  async findByUserId(info: GraphQLResolveInfo, id: string, isDeleted: boolean) {
    this.logger.log(`Finding Routine by userId ${id}`);
    var userRoutines = await this.repository.findMany({
      select: this.getSelect(info),
      where: { User: { id }, isDeleted },
    });
    this.logger.log(
      `Routines to the user ${id}:  ${JSON.stringify(userRoutines)}`,
    );
    return userRoutines;
  }

  private getSelect(info: GraphQLResolveInfo) {
    return new PrismaSelect(info, {
      defaultFields: {
        Routine: {
          id: true,
        },
        User: {
          id: true,
        },
      },
    }).value.select;
  }
}
