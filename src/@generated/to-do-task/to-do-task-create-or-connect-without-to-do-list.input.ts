import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateWithoutToDoListInput } from './to-do-task-create-without-to-do-list.input';

@InputType()
export class ToDoTaskCreateOrConnectWithoutToDoListInput {

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskCreateWithoutToDoListInput, {nullable:false})
    @Type(() => ToDoTaskCreateWithoutToDoListInput)
    create!: ToDoTaskCreateWithoutToDoListInput;
}
