import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { RabitLogger } from '../../utils/logger';
import { ToDoListRepository } from './todo_list.repository';

@Injectable()
export class ToDoListService {
  private readonly logger = new RabitLogger(ToDoListService.name);

  constructor(private readonly repository: ToDoListRepository) {}

  async update(
    info: GraphQLResolveInfo,
    where: Prisma.ToDoListWhereUniqueInput,
    data: Prisma.ToDoListUpdateInput,
  ) {
    this.logger.log(`Updating ToDoList with id ${where.id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var updatedTodoList = await this.repository.update({
      data,
      where,
      select: this.getSelect(info),
    });
    this.logger.log(`Updated ToDoList: ${JSON.stringify(updatedTodoList)}`);
    return updatedTodoList;
  }

  async findOne(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Finding ToDoList with id ${id}`);
    var todo = await this.repository.findUnique({
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`ToDoList: ${JSON.stringify(todo)}`);
    return todo;
  }

  async findByUserId(info: GraphQLResolveInfo, id: string, isDeleted: boolean) {
    this.logger.log(`Finding ToDoList by userId ${id}`);
    var userTodoLists = await this.repository.findMany({
      select: this.getSelect(info),
      where: { user: { id }, isDeleted },
    });
    this.logger.log(
      `To do Lists to the user ${id}:  ${JSON.stringify(userTodoLists)}`,
    );
    return userTodoLists;
  }

  async create(info: GraphQLResolveInfo, data: Prisma.ToDoListCreateInput) {
    this.logger.log(`Creating ToDoList with data ${JSON.stringify(data)}`);
    var createdTodo = await this.repository.create({
      data,
      select: this.getSelect(info),
    });
    this.logger.log(`Created ToDoList: ${JSON.stringify(createdTodo)}`);
    return createdTodo;
  }

  async delete(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Updating isDelete of ToDoList with id ${id}`);
    var deletedTodo = await this.repository.update({
      select: this.getSelect(info),
      data: { isDeleted: true },
      where: { id },
    });
    this.logger.log(`Deleted ToDoList: ${JSON.stringify(deletedTodo)}`);
    return deletedTodo;
  }

  private getSelect(info: GraphQLResolveInfo) {
    return new PrismaSelect(info, {
      defaultFields: {
        TodoList: {
          id: true,
        },
        User: {
          id: true,
        },
      },
    }).value.select;
  }
}
