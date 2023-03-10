import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { HabitCreateInput } from '../@generated/habit/habit-create.input';
import { HabitUpdateInput } from '../@generated/habit/habit-update.input';
import { HabitWhereUniqueInput } from '../@generated/habit/habit-where-unique.input';
import { Habit } from '../@generated/habit/habit.model';
import { FirebaseAuthGuard } from '../auth/firebase.auth.guard';
import { RabitLogger } from '../utils/logger';
import { HabitService } from './habit.service';

@Resolver((of) => Habit)
export class HabitResolver {
  private readonly logger = new RabitLogger(HabitResolver.name);

  constructor(private readonly habitService: HabitService) {}

  @Query((returns) => [Habit])
  //do a guard here
  @UseGuards(FirebaseAuthGuard)
  async getAllNotDeletedHabitsByUserId(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ): Promise<{}[]> {
    this.logger.log(`Getting Habit by userId ${id}`);
    var response = await this.habitService.findByUserId(info, id, false);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Query((returns) => [Habit])
  async getHabitsByUserId(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Getting Habit by id ${id}`);
    var response = await this.habitService.findByUserId(info, id, false);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Query((returns) => Habit)
  async getHabit(
    @Args('id') habitId: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Getting Habit by id ${habitId}`);
    var response = await this.habitService.findOne(info, habitId);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => Habit)
  async createHabit(
    @Args('data') data: HabitCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Creating Habit with data ${JSON.stringify(data)}`);
    var response = await this.habitService.create(info, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => Habit)
  async updateHabit(
    @Args('where') where: HabitWhereUniqueInput,
    @Args('data') data: HabitUpdateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Updating Habit with where ${JSON.stringify(where)}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var response = await this.habitService.update(info, where, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }
}
