import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ToDoTask } from '../to-do-task/to-do-task.model';

@ObjectType()
export class ToDoSubtask {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ToDoTask, {nullable:false})
    toDoTask?: ToDoTask;

    @Field(() => String, {nullable:false})
    toDoTaskId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDone!: boolean;
}
