import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';

@InputType()
export class ToDoTaskRelationFilter {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    is?: ToDoTaskWhereInput;

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    isNot?: ToDoTaskWhereInput;
}
