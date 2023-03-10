import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoListCreateWithoutTasksInput } from './to-do-list-create-without-tasks.input';

@InputType()
export class ToDoListCreateOrConnectWithoutTasksInput {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;

    @Field(() => ToDoListCreateWithoutTasksInput, {nullable:false})
    @Type(() => ToDoListCreateWithoutTasksInput)
    create!: ToDoListCreateWithoutTasksInput;
}
