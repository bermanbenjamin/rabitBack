import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskUpdateWithoutToDoTaskInput } from './to-do-subtask-update-without-to-do-task.input';
import { ToDoSubtaskCreateWithoutToDoTaskInput } from './to-do-subtask-create-without-to-do-task.input';

@InputType()
export class ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput {

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    where!: ToDoSubtaskWhereUniqueInput;

    @Field(() => ToDoSubtaskUpdateWithoutToDoTaskInput, {nullable:false})
    @Type(() => ToDoSubtaskUpdateWithoutToDoTaskInput)
    update!: ToDoSubtaskUpdateWithoutToDoTaskInput;

    @Field(() => ToDoSubtaskCreateWithoutToDoTaskInput, {nullable:false})
    @Type(() => ToDoSubtaskCreateWithoutToDoTaskInput)
    create!: ToDoSubtaskCreateWithoutToDoTaskInput;
}
