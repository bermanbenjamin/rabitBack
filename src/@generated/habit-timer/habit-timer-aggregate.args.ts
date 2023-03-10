import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereInput } from './habit-timer-where.input';
import { Type } from 'class-transformer';
import { HabitTimerOrderByWithRelationInput } from './habit-timer-order-by-with-relation.input';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitTimerCountAggregateInput } from './habit-timer-count-aggregate.input';
import { HabitTimerMinAggregateInput } from './habit-timer-min-aggregate.input';
import { HabitTimerMaxAggregateInput } from './habit-timer-max-aggregate.input';

@ArgsType()
export class HabitTimerAggregateArgs {

    @Field(() => HabitTimerWhereInput, {nullable:true})
    @Type(() => HabitTimerWhereInput)
    where?: HabitTimerWhereInput;

    @Field(() => [HabitTimerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitTimerOrderByWithRelationInput>;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:true})
    cursor?: HabitTimerWhereUniqueInput;

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
