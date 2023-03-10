import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutSubTasksInput } from './to-do-task-create-without-sub-tasks.input';
import { ToDoTaskCreateOrConnectWithoutSubTasksInput } from './to-do-task-create-or-connect-without-sub-tasks.input';
import { ToDoTaskUpsertWithoutSubTasksInput } from './to-do-task-upsert-without-sub-tasks.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { ToDoTaskUpdateWithoutSubTasksInput } from './to-do-task-update-without-sub-tasks.input';

@InputType()
export class ToDoTaskUpdateOneRequiredWithoutSubTasksInput {

    @Field(() => ToDoTaskCreateWithoutSubTasksInput, {nullable:true})
    create?: ToDoTaskCreateWithoutSubTasksInput;

    @Field(() => ToDoTaskCreateOrConnectWithoutSubTasksInput, {nullable:true})
    connectOrCreate?: ToDoTaskCreateOrConnectWithoutSubTasksInput;

    @Field(() => ToDoTaskUpsertWithoutSubTasksInput, {nullable:true})
    upsert?: ToDoTaskUpsertWithoutSubTasksInput;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:true})
    connect?: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskUpdateWithoutSubTasksInput, {nullable:true})
    update?: ToDoTaskUpdateWithoutSubTasksInput;
}
