import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateWithoutSubTasksInput } from './to-do-task-create-without-sub-tasks.input';

@InputType()
export class ToDoTaskCreateOrConnectWithoutSubTasksInput {

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskCreateWithoutSubTasksInput, {nullable:false})
    @Type(() => ToDoTaskCreateWithoutSubTasksInput)
    create!: ToDoTaskCreateWithoutSubTasksInput;
}
