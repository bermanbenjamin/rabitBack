import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';

@InputType()
export class ToDoListRelationFilter {

    @Field(() => ToDoListWhereInput, {nullable:true})
    is?: ToDoListWhereInput;

    @Field(() => ToDoListWhereInput, {nullable:true})
    isNot?: ToDoListWhereInput;
}
