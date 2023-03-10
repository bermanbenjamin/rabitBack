import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToDoTaskOrderByWithRelationInput } from '../to-do-task/to-do-task-order-by-with-relation.input';

@InputType()
export class ToDoSubtaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ToDoTaskOrderByWithRelationInput, {nullable:true})
    toDoTask?: ToDoTaskOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    toDoTaskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDone?: keyof typeof SortOrder;
}
