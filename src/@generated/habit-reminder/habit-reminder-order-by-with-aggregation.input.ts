import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitReminderCountOrderByAggregateInput } from './habit-reminder-count-order-by-aggregate.input';
import { HabitReminderMaxOrderByAggregateInput } from './habit-reminder-max-order-by-aggregate.input';
import { HabitReminderMinOrderByAggregateInput } from './habit-reminder-min-order-by-aggregate.input';

@InputType()
export class HabitReminderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAlarm?: keyof typeof SortOrder;

    @Field(() => HabitReminderCountOrderByAggregateInput, {nullable:true})
    _count?: HabitReminderCountOrderByAggregateInput;

    @Field(() => HabitReminderMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitReminderMaxOrderByAggregateInput;

    @Field(() => HabitReminderMinOrderByAggregateInput, {nullable:true})
    _min?: HabitReminderMinOrderByAggregateInput;
}
