import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ToDoListRepository {
  prismaService = new PrismaService();

  update = this.prismaService.toDoList.update;
  findUnique = this.prismaService.toDoList.findUnique;
  findMany = this.prismaService.toDoList.findMany;
  create = this.prismaService.toDoList.create;
  delete = this.prismaService.toDoList.delete;

  constructor(private readonly prisma: PrismaService) {}
}
