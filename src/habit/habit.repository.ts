import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HabitRepository {
  prismaService = new PrismaService();

  update = this.prismaService.habit.update;
  findUnique = this.prismaService.habit.findUnique;
  findMany = this.prismaService.habit.findMany;
  create = this.prismaService.habit.create;
  delete = this.prismaService.habit.delete;
}
