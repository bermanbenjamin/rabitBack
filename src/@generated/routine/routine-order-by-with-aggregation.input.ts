import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoutineCountOrderByAggregateInput } from './routine-count-order-by-aggregate.input';
import { RoutineMaxOrderByAggregateInput } from './routine-max-order-by-aggregate.input';
import { RoutineMinOrderByAggregateInput } from './routine-min-order-by-aggregate.input';

@InputType()
export class RoutineOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => RoutineCountOrderByAggregateInput, {nullable:true})
    _count?: RoutineCountOrderByAggregateInput;

    @Field(() => RoutineMaxOrderByAggregateInput, {nullable:true})
    _max?: RoutineMaxOrderByAggregateInput;

    @Field(() => RoutineMinOrderByAggregateInput, {nullable:true})
    _min?: RoutineMinOrderByAggregateInput;
}
