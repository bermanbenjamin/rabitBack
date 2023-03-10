import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutSubTasksInput } from './to-do-task-create-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateOrConnectWithoutSubTasksInput } from './to-do-task-create-or-connect-without-sub-tasks.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';

@InputType()
export class ToDoTaskCreateNestedOneWithoutSubTasksInput {

    @Field(() => ToDoTaskCreateWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskCreateWithoutSubTasksInput)
    create?: ToDoTaskCreateWithoutSubTasksInput;

    @Field(() => ToDoTaskCreateOrConnectWithoutSubTasksInput, {nullable:true})
    @Type(() => ToDoTaskCreateOrConnectWithoutSubTasksInput)
    connectOrCreate?: ToDoTaskCreateOrConnectWithoutSubTasksInput;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    connect?: ToDoTaskWhereUniqueInput;
}
