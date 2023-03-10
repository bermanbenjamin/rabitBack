import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitHistoryDayCountOrderByAggregateInput } from './habit-history-day-count-order-by-aggregate.input';
import { HabitHistoryDayAvgOrderByAggregateInput } from './habit-history-day-avg-order-by-aggregate.input';
import { HabitHistoryDayMaxOrderByAggregateInput } from './habit-history-day-max-order-by-aggregate.input';
import { HabitHistoryDayMinOrderByAggregateInput } from './habit-history-day-min-order-by-aggregate.input';
import { HabitHistoryDaySumOrderByAggregateInput } from './habit-history-day-sum-order-by-aggregate.input';

@InputType()
export class HabitHistoryDayOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frequencyOnThisDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    doneTimes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondsPerFrequency?: keyof typeof SortOrder;

    @Field(() => HabitHistoryDayCountOrderByAggregateInput, {nullable:true})
    _count?: HabitHistoryDayCountOrderByAggregateInput;

    @Field(() => HabitHistoryDayAvgOrderByAggregateInput, {nullable:true})
    _avg?: HabitHistoryDayAvgOrderByAggregateInput;

    @Field(() => HabitHistoryDayMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitHistoryDayMaxOrderByAggregateInput;

    @Field(() => HabitHistoryDayMinOrderByAggregateInput, {nullable:true})
    _min?: HabitHistoryDayMinOrderByAggregateInput;

    @Field(() => HabitHistoryDaySumOrderByAggregateInput, {nullable:true})
    _sum?: HabitHistoryDaySumOrderByAggregateInput;
}
