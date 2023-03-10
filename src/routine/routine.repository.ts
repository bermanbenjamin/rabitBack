import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RoutineRepository {
  prismaService = new PrismaService();

  update = this.prismaService.routine.update;
  findMany = this.prismaService.routine.findMany;
  create = this.prismaService.routine.create;
  delete = this.prismaService.routine.delete;
}
