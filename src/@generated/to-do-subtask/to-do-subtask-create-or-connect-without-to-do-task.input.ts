import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskCreateWithoutToDoTaskInput } from './to-do-subtask-create-without-to-do-task.input';

@InputType()
export class ToDoSubtaskCreateOrConnectWithoutToDoTaskInput {

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    where!: ToDoSubtaskWhereUniqueInput;

    @Field(() => ToDoSubtaskCreateWithoutToDoTaskInput, {nullable:false})
    @Type(() => ToDoSubtaskCreateWithoutToDoTaskInput)
    create!: ToDoSubtaskCreateWithoutToDoTaskInput;
}
