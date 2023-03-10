import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoTaskUpdateWithoutToDoListInput } from './to-do-task-update-without-to-do-list.input';
import { ToDoTaskCreateWithoutToDoListInput } from './to-do-task-create-without-to-do-list.input';

@InputType()
export class ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput {

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskUpdateWithoutToDoListInput, {nullable:false})
    @Type(() => ToDoTaskUpdateWithoutToDoListInput)
    update!: ToDoTaskUpdateWithoutToDoListInput;

    @Field(() => ToDoTaskCreateWithoutToDoListInput, {nullable:false})
    @Type(() => ToDoTaskCreateWithoutToDoListInput)
    create!: ToDoTaskCreateWithoutToDoListInput;
}
