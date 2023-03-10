import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitIntervalCountOrderByAggregateInput } from './habit-interval-count-order-by-aggregate.input';
import { HabitIntervalAvgOrderByAggregateInput } from './habit-interval-avg-order-by-aggregate.input';
import { HabitIntervalMaxOrderByAggregateInput } from './habit-interval-max-order-by-aggregate.input';
import { HabitIntervalMinOrderByAggregateInput } from './habit-interval-min-order-by-aggregate.input';
import { HabitIntervalSumOrderByAggregateInput } from './habit-interval-sum-order-by-aggregate.input';

@InputType()
export class HabitIntervalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timesPerWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => HabitIntervalCountOrderByAggregateInput, {nullable:true})
    _count?: HabitIntervalCountOrderByAggregateInput;

    @Field(() => HabitIntervalAvgOrderByAggregateInput, {nullable:true})
    _avg?: HabitIntervalAvgOrderByAggregateInput;

    @Field(() => HabitIntervalMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitIntervalMaxOrderByAggregateInput;

    @Field(() => HabitIntervalMinOrderByAggregateInput, {nullable:true})
    _min?: HabitIntervalMinOrderByAggregateInput;

    @Field(() => HabitIntervalSumOrderByAggregateInput, {nullable:true})
    _sum?: HabitIntervalSumOrderByAggregateInput;
}
