import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { RabitLogger } from '../../utils/logger';
import { ToDoTaskRepository } from './todo_task.repository';

@Injectable()
export class ToDoTaskService {
  private readonly logger = new RabitLogger(ToDoTaskService.name);

  constructor(private readonly repository: ToDoTaskRepository) {}

  async create(info: GraphQLResolveInfo, data: Prisma.ToDoTaskCreateInput) {
    this.logger.log(`Creating ToDoTask with data ${JSON.stringify(data)}`);
    var createdToDoTask = await this.repository.create({
      data,
      select: this.getSelect(info),
    });
    this.logger.log(`Created ToDoTask: ${JSON.stringify(createdToDoTask)}`);
    return createdToDoTask;
  }

  async update(
    info: GraphQLResolveInfo,
    where: Prisma.ToDoTaskWhereUniqueInput,
    data: Prisma.ToDoTaskUpdateInput,
  ) {
    this.logger.log(`Updating ToDoTask with id ${where.id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var updatedToDoTask = await this.repository.update({
      data,
      where,
      select: this.getSelect(info),
    });
    this.logger.log(`Updated ToDoTask: ${JSON.stringify(updatedToDoTask)}`);
    return updatedToDoTask;
  }

  async delete(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Updating isDelete of ToDoTask with id ${id}`);
    var deletedToDoTask = await this.repository.delete({
      where: { id },
      select: this.getSelect(info),
    });

    this.logger.log(`Deleted ToDoTask: ${JSON.stringify(deletedToDoTask)}`);
    return deletedToDoTask;
  }

  async findOne(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Finding ToDoTask with id ${id}`);
    var toDoTask = await this.repository.findUnique({
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`ToDoTask: ${JSON.stringify(toDoTask)}`);
    return toDoTask;
  }

  private getSelect(info: GraphQLResolveInfo) {
    return new PrismaSelect(info, {
      defaultFields: {
        TodoTask: {
          id: true,
        },
        User: {
          id: true,
        },
      },
    }).value.select;
  }
}
