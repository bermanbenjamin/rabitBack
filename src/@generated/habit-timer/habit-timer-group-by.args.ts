import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereInput } from './habit-timer-where.input';
import { Type } from 'class-transformer';
import { HabitTimerOrderByWithAggregationInput } from './habit-timer-order-by-with-aggregation.input';
import { HabitTimerScalarFieldEnum } from './habit-timer-scalar-field.enum';
import { HabitTimerScalarWhereWithAggregatesInput } from './habit-timer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HabitTimerCountAggregateInput } from './habit-timer-count-aggregate.input';
import { HabitTimerMinAggregateInput } from './habit-timer-min-aggregate.input';
import { HabitTimerMaxAggregateInput } from './habit-timer-max-aggregate.input';

@ArgsType()
export class HabitTimerGroupByArgs {

    @Field(() => HabitTimerWhereInput, {nullable:true})
    @Type(() => HabitTimerWhereInput)
    where?: HabitTimerWhereInput;

    @Field(() => [HabitTimerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HabitTimerOrderByWithAggregationInput>;

    @Field(() => [HabitTimerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HabitTimerScalarFieldEnum>;

    @Field(() => HabitTimerScalarWhereWithAggregatesInput, {nullable:true})
    having?: HabitTimerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitTimerCountAggregateInput, {nullable:true})
    _count?: HabitTimerCountAggregateInput;

    @Field(() => HabitTimerMinAggregateInput, {nullable:true})
    _min?: HabitTimerMinAggregateInput;

    @Field(() => HabitTimerMaxAggregateInput, {nullable:true})
    _max?: HabitTimerMaxAggregateInput;
}
