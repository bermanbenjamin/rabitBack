import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { User } from '../@generated/user/user.model';
import { FirebaseAuthGuard } from '../auth/firebase.auth.guard';
import { RabitLogger } from '../utils/logger';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  private readonly logger = new RabitLogger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  // @UseGuards(FirebaseGraphQlAuth)
  async getUser(
    @Args('id') id: string,
    // @AuthUserId() userId: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Getting User with id ${id}`);
    var response = await this.userService.findOne(info, id);
    console.log(typeof response);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => User)
  @UseGuards(FirebaseAuthGuard)
  async createUser(
    @Args('data') data: UserCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Creating User with data ${JSON.stringify(data)}`);
    var response = await this.userService.create(info, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }

  @Mutation((returns) => User)
  async updateUser(
    @Args('data') data: UserUpdateInput,
    @Args('id') id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    this.logger.log(`Updating User with id ${id}`);
    this.logger.log(`Data: ${JSON.stringify(data)}`);
    var response = await this.userService.update(info, { id }, data);
    this.logger.log(`Response: ${JSON.stringify(response)}`);
    return response;
  }
}
