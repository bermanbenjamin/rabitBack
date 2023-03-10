import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { ToDoListCreateInput } from '../../@generated/to-do-list/to-do-list-create.input';
import { ToDoListUpdateInput } from '../../@generated/to-do-list/to-do-list-update.input';
import { ToDoList } from '../../@generated/to-do-list/to-do-list.model';
import { RabitLogger } from '../../utils/logger';
import { ToDoListService } from './todo_list.service';

@Resolver((of) => ToDoList)
export class ToDoListResolver {
  private readonly logger = new RabitLogger(ToDoListResolver.name);

  constructor(private readonly toDoListService: ToDoListService) {}

  @Query((returns) => [ToDoList])
  async getAllNotDeletedTodoListByUserId(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Getting ToDoList by userId ${id}`);
    var response = await this.toDoListService.findByUserId(info, id, false);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Query((returns) => ToDoList)
  async getToDoList(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    this.logger.log(`Getting ToDoList by id ${id}`);
    var response = await this.toDoListService.findOne(info, id);
    this.logger.log(`Response: ${JSON.stringify(response)}`);

    return response;
  }

  @Mutation((returns) => ToDoList)
  async createToDoList(
    @Args('data') data: ToDoListCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Creating ToDoList with data ${JSON.stringify(data)}`);
    var response = await this.toDoListService.create(info, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => ToDoList)
  async deleteToDoList(
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Deleting ToDoList with id ${id}`);
    var response = await this.toDoListService.delete(info, id);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => ToDoList)
  async updateToDoList(
    @Args('id') id: string,
    @Args('data') data: ToDoListUpdateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Updating ToDoList with id ${id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var response = await this.toDoListService.update(info, { id }, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }
}
