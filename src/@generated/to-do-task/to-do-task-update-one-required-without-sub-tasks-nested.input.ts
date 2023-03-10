import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutSubTasksInput } from './to-do-task-create-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateOrConnectWithoutSubTasksInput } from './to-do-task-create-or-connect-without-sub-tasks.input';
import { ToDoTaskUpsertWithoutSubTasksInput } from './to-do-task-upsert-without-sub-tasks.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { ToDoTaskUpdateWithoutSubTasksInput } from './to-do-task-update-without-sub-tasks.input';

@InputType()
export class ToDoTaskUpdateOneRequiredWithoutSubTasksNestedInput {

    @Field(() => ToDoTaskCreateWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskCreateWithoutSubTasksInput)
    create?: ToDoTaskCreateWithoutSubTasksInput;

    @Field(() => ToDoTaskCreateOrConnectWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskCreateOrConnectWithoutSubTasksInput)
    connectOrCreate?: ToDoTaskCreateOrConnectWithoutSubTasksInput;

    @Field(() => ToDoTaskUpsertWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskUpsertWithoutSubTasksInput)
    upsert?: ToDoTaskUpsertWithoutSubTasksInput;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    connect?: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskUpdateWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskUpdateWithoutSubTasksInput)
    update?: ToDoTaskUpdateWithoutSubTasksInput;
}
