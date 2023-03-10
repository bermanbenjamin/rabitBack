import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ToDoTaskRepository {
  prismaService = new PrismaService();

  update = this.prismaService.toDoTask.update;
  findUnique = this.prismaService.toDoTask.findUnique;
  findMany = this.prismaService.toDoTask.findMany;
  create = this.prismaService.toDoTask.create;
  delete = this.prismaService.toDoTask.delete;

  constructor(private readonly prisma: PrismaService) {}
}
