import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';

@InputType()
export class ToDoListListRelationFilter {

    @Field(() => ToDoListWhereInput, {nullable:true})
    every?: ToDoListWhereInput;

    @Field(() => ToDoListWhereInput, {nullable:true})
    some?: ToDoListWhereInput;

    @Field(() => ToDoListWhereInput, {nullable:true})
    none?: ToDoListWhereInput;
}
