import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { RoutineCreateInput } from '../@generated/routine/routine-create.input';
import { RoutineUpdateInput } from '../@generated/routine/routine-update.input';
import { Routine } from '../@generated/routine/routine.model';
import { RabitLogger } from '../utils/logger';
import { RoutineService } from './routine.service';

@Resolver((of) => Routine)
export class RoutineResolver {
  private readonly logger = new RabitLogger(RoutineResolver.name);

  constructor(private readonly routineService: RoutineService) {}

  @Query((returns) => [Routine])
  async getAllNotDeletedRoutinesByUserId(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Getting Routines by userId ${id}`);
    var response = await this.routineService.findByUserId(info, id, false);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => Routine)
  async updateRoutine(
    @Args('id') id: string,
    @Args('data') data: RoutineUpdateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Updating Routine with id ${id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var response = await this.routineService.update(info, { id }, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => Routine)
  async createRoutine(
    @Args('data') data: RoutineCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Creating Routine with data ${JSON.stringify(data)}`);
    var response = await this.routineService.create(info, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }
}
