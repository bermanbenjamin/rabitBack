import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoutineRepository } from './routine.repository';
import { RoutineResolver } from './routine.resolver';
import { RoutineService } from './routine.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    RoutineResolver,
    RoutineService,
    RoutineRepository,
  ],
  exports: [RoutineService],
})
export class RoutineModule {}
