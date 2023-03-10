import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ToDoTask } from '../to-do-task/to-do-task.model';
import { User } from '../user/user.model';
import { ToDoListCount } from './to-do-list-count.output';

@ObjectType()
export class ToDoList {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => [ToDoTask], {nullable:true})
    tasks?: Array<ToDoTask>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => ToDoListCount, {nullable:false})
    _count?: ToDoListCount;
}
