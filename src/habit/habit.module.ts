import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { HabitRepository } from './habit.repository';
import { HabitResolver } from './habit.resolver';
import { HabitService } from './habit.service';

@Module({
  imports: [],
  providers: [PrismaService, HabitService, HabitResolver, HabitRepository],
  exports: [HabitService],
})
export class HabitModule {}
