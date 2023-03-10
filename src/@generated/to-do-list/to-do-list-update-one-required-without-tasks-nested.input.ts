import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutTasksInput } from './to-do-list-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ToDoListCreateOrConnectWithoutTasksInput } from './to-do-list-create-or-connect-without-tasks.input';
import { ToDoListUpsertWithoutTasksInput } from './to-do-list-upsert-without-tasks.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { ToDoListUpdateWithoutTasksInput } from './to-do-list-update-without-tasks.input';

@InputType()
export class ToDoListUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ToDoListCreateWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListCreateWithoutTasksInput)
    create?: ToDoListCreateWithoutTasksInput;

    @Field(() => ToDoListCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ToDoListCreateOrConnectWithoutTasksInput;

    @Field(() => ToDoListUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListUpsertWithoutTasksInput)
    upsert?: ToDoListUpsertWithoutTasksInput;

    @Field(() => ToDoListWhereUniqueInput, {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    connect?: ToDoListWhereUniqueInput;

    @Field(() => ToDoListUpdateWithoutTasksInput, {nullable:true})
    @Type(() => ToDoListUpdateWithoutTasksInput)
    update?: ToDoListUpdateWithoutTasksInput;
}
