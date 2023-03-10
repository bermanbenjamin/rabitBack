import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { HabitCreateInput } from '../@generated/habit/habit-create.input';
import { HabitUpdateInput } from '../@generated/habit/habit-update.input';
import { HabitWhereUniqueInput } from '../@generated/habit/habit-where-unique.input';
import { RabitLogger } from '../utils/logger';
import { HabitRepository } from './habit.repository';

@Injectable()
export class HabitService {
  private readonly logger = new RabitLogger(HabitService.name);

  constructor(private readonly habitRepository: HabitRepository) {}

  async create(info: GraphQLResolveInfo, data: HabitCreateInput) {
    this.logger.log(`Creating Habit with data ${JSON.stringify(data)}`);
    var createdHabit = await this.habitRepository.create({
      data,
      select: this.getSelect(info),
    });
    this.logger.log(`Created Habit: ${JSON.stringify(createdHabit)}`);
    return createdHabit;
  }

  async update(
    info: GraphQLResolveInfo,
    where: HabitWhereUniqueInput,
    data: HabitUpdateInput,
  ) {
    this.logger.log(`Updating Habit with id ${where.id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var updatedHabit = await this.habitRepository.update({
      data,
      where,
      select: this.getSelect(info),
    });
    this.logger.log(`Updated Habit: ${JSON.stringify(updatedHabit)}`);
    return updatedHabit;
  }

  async delete(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Updating isDelete of Habit with id ${id}`);
    var deletedHabit = await this.habitRepository.update({
      data: { isDeleted: true },
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`Deleted Habit: ${JSON.stringify(deletedHabit)}`);
    return deletedHabit;
  }

  async findOne(info: GraphQLResolveInfo, id: string) {
    this.logger.log(`Finding Habit with id ${id}`);
    var habit = await this.habitRepository.findUnique({
      where: { id },
      select: this.getSelect(info),
    });
    this.logger.log(`Habit: ${JSON.stringify(habit)}`);
    return habit;
  }

  async findByUserId(info: GraphQLResolveInfo, id: string, isDeleted: boolean) {
    this.logger.log(`Finding Habit by userId ${id}`);
    var habits = await this.habitRepository.findMany({
      where: { User: { id }, isDeleted },
      select: this.getSelect(info),
    });
    this.logger.log(`Habits: ${JSON.stringify(habits)}`);
    return habits;
  }

  private getSelect(info: GraphQLResolveInfo) {
    return new PrismaSelect(info, {
      defaultFields: {
        Habit: {
          id: true,
        },
        User: {
          id: true,
        },
      },
    }).value.select;
  }
}
