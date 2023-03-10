import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { ToDoTaskCreateInput } from '../../@generated/to-do-task/to-do-task-create.input';
import { ToDoTaskUpdateInput } from '../../@generated/to-do-task/to-do-task-update.input';
import { ToDoTask } from '../../@generated/to-do-task/to-do-task.model';
import { RabitLogger } from '../../utils/logger';
import { ToDoTaskService } from './todo_task.service';

@Resolver((of) => ToDoTask)
export class ToDoTaskResolver {
  private readonly logger = new RabitLogger(ToDoTaskResolver.name);

  constructor(private readonly toDoTaskService: ToDoTaskService) {}

  @Query((returns) => ToDoTask)
  async getToDoTask(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    this.logger.log(`Getting ToDoTask by id ${id}`);
    var response = await this.toDoTaskService.findOne(info, id);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => ToDoTask)
  async updateToDoTask(
    @Args('id') id: string,
    @Args('data') data: ToDoTaskUpdateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Updating ToDoTask with id ${id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var response = await this.toDoTaskService.update(info, { id }, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => ToDoTask)
  async createToDoTask(
    @Args('data') data: ToDoTaskCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Creating ToDoTask with data ${JSON.stringify(data)}`);
    var response = await this.toDoTaskService.create(info, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => ToDoTask)
  async deleteToDoTask(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Deleting ToDoTask with id ${id}`);
    var response = await this.toDoTaskService.delete(info, id);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }
}
