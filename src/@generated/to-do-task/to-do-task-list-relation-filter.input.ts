import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';

@InputType()
export class ToDoTaskListRelationFilter {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    every?: ToDoTaskWhereInput;

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    some?: ToDoTaskWhereInput;

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    none?: ToDoTaskWhereInput;
}
