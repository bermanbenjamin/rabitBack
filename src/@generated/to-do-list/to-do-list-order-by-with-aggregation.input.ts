import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToDoListCountOrderByAggregateInput } from './to-do-list-count-order-by-aggregate.input';
import { ToDoListMaxOrderByAggregateInput } from './to-do-list-max-order-by-aggregate.input';
import { ToDoListMinOrderByAggregateInput } from './to-do-list-min-order-by-aggregate.input';

@InputType()
export class ToDoListOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ToDoListCountOrderByAggregateInput, {nullable:true})
    _count?: ToDoListCountOrderByAggregateInput;

    @Field(() => ToDoListMaxOrderByAggregateInput, {nullable:true})
    _max?: ToDoListMaxOrderByAggregateInput;

    @Field(() => ToDoListMinOrderByAggregateInput, {nullable:true})
    _min?: ToDoListMinOrderByAggregateInput;
}
