import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';

@InputType()
export class ToDoSubtaskListRelationFilter {

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    every?: ToDoSubtaskWhereInput;

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    some?: ToDoSubtaskWhereInput;

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    none?: ToDoSubtaskWhereInput;
}
