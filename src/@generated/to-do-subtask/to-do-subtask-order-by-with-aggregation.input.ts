import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToDoSubtaskCountOrderByAggregateInput } from './to-do-subtask-count-order-by-aggregate.input';
import { ToDoSubtaskMaxOrderByAggregateInput } from './to-do-subtask-max-order-by-aggregate.input';
import { ToDoSubtaskMinOrderByAggregateInput } from './to-do-subtask-min-order-by-aggregate.input';

@InputType()
export class ToDoSubtaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    toDoTaskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDone?: keyof typeof SortOrder;

    @Field(() => ToDoSubtaskCountOrderByAggregateInput, {nullable:true})
    _count?: ToDoSubtaskCountOrderByAggregateInput;

    @Field(() => ToDoSubtaskMaxOrderByAggregateInput, {nullable:true})
    _max?: ToDoSubtaskMaxOrderByAggregateInput;

    @Field(() => ToDoSubtaskMinOrderByAggregateInput, {nullable:true})
    _min?: ToDoSubtaskMinOrderByAggregateInput;
}
