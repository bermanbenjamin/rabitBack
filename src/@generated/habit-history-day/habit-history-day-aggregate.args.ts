import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayWhereInput } from './habit-history-day-where.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayOrderByWithRelationInput } from './habit-history-day-order-by-with-relation.input';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitHistoryDayCountAggregateInput } from './habit-history-day-count-aggregate.input';
import { HabitHistoryDayAvgAggregateInput } from './habit-history-day-avg-aggregate.input';
import { HabitHistoryDaySumAggregateInput } from './habit-history-day-sum-aggregate.input';
import { HabitHistoryDayMinAggregateInput } from './habit-history-day-min-aggregate.input';
import { HabitHistoryDayMaxAggregateInput } from './habit-history-day-max-aggregate.input';

@ArgsType()
export class HabitHistoryDayAggregateArgs {

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    @Type(() => HabitHistoryDayWhereInput)
    where?: HabitHistoryDayWhereInput;

    @Field(() => [HabitHistoryDayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitHistoryDayOrderByWithRelationInput>;

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:true})
    cursor?: HabitHistoryDayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitHistoryDayCountAggregateInput, {nullable:true})
    _count?: HabitHistoryDayCountAggregateInput;

    @Field(() => HabitHistoryDayAvgAggregateInput, {nullable:true})
    _avg?: HabitHistoryDayAvgAggregateInput;

    @Field(() => HabitHistoryDaySumAggregateInput, {nullable:true})
    _sum?: HabitHistoryDaySumAggregateInput;

    @Field(() => HabitHistoryDayMinAggregateInput, {nullable:true})
    _min?: HabitHistoryDayMinAggregateInput;

    @Field(() => HabitHistoryDayMaxAggregateInput, {nullable:true})
    _max?: HabitHistoryDayMaxAggregateInput;
}
