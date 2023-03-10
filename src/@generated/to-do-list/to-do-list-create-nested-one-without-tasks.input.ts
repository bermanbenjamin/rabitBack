import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutTasksInput } from './to-do-list-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ToDoListCreateOrConnectWithoutTasksInput } from './to-do-list-create-or-connect-without-tasks.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';

@InputType()
export class ToDoListCreateNestedOneWithoutTasksInput {

    @Field(() => ToDoListCreateWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListCreateWithoutTasksInput)
    create?: ToDoListCreateWithoutTasksInput;

    @Field(() => ToDoListCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ToDoListCreateOrConnectWithoutTasksInput;

    @Field(() => ToDoListWhereUniqueInput, {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    connect?: ToDoListWhereUniqueInput;
}
