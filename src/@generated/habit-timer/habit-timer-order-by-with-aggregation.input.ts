import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitTimerCountOrderByAggregateInput } from './habit-timer-count-order-by-aggregate.input';
import { HabitTimerMaxOrderByAggregateInput } from './habit-timer-max-order-by-aggregate.input';
import { HabitTimerMinOrderByAggregateInput } from './habit-timer-min-order-by-aggregate.input';

@InputType()
export class HabitTimerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => HabitTimerCountOrderByAggregateInput, {nullable:true})
    _count?: HabitTimerCountOrderByAggregateInput;

    @Field(() => HabitTimerMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitTimerMaxOrderByAggregateInput;

    @Field(() => HabitTimerMinOrderByAggregateInput, {nullable:true})
    _min?: HabitTimerMinOrderByAggregateInput;
}
