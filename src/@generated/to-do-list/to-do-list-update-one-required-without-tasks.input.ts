import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutTasksInput } from './to-do-list-create-without-tasks.input';
import { ToDoListCreateOrConnectWithoutTasksInput } from './to-do-list-create-or-connect-without-tasks.input';
import { ToDoListUpsertWithoutTasksInput } from './to-do-list-upsert-without-tasks.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { ToDoListUpdateWithoutTasksInput } from './to-do-list-update-without-tasks.input';

@InputType()
export class ToDoListUpdateOneRequiredWithoutTasksInput {

    @Field(() => ToDoListCreateWithoutTasksInput, {nullable:true})
    create?: ToDoListCreateWithoutTasksInput;

    @Field(() => ToDoListCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: ToDoListCreateOrConnectWithoutTasksInput;

    @Field(() => ToDoListUpsertWithoutTasksInput, {nullable:true})
    upsert?: ToDoListUpsertWithoutTasksInput;

    @Field(() => ToDoListWhereUniqueInput, {nullable:true})
    connect?: ToDoListWhereUniqueInput;

    @Field(() => ToDoListUpdateWithoutTasksInput, {nullable:true})
    update?: ToDoListUpdateWithoutTasksInput;
}
