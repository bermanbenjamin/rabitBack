import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  prismaService = new PrismaService();

  update = this.prismaService.user.update;
  findUnique = this.prismaService.user.findUnique;
  findMany = this.prismaService.user.findMany;
  create = this.prismaService.user.create;
  delete = this.prismaService.user.delete;

  constructor(private readonly prisma: PrismaService) {}
}
