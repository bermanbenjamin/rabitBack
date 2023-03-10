import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitHistoryDayCountAggregate } from './habit-history-day-count-aggregate.output';
import { HabitHistoryDayAvgAggregate } from './habit-history-day-avg-aggregate.output';
import { HabitHistoryDaySumAggregate } from './habit-history-day-sum-aggregate.output';
import { HabitHistoryDayMinAggregate } from './habit-history-day-min-aggregate.output';
import { HabitHistoryDayMaxAggregate } from './habit-history-day-max-aggregate.output';

@ObjectType()
export class AggregateHabitHistoryDay {

    @Field(() => HabitHistoryDayCountAggregate, {nullable:true})
    _count?: HabitHistoryDayCountAggregate;

    @Field(() => HabitHistoryDayAvgAggregate, {nullable:true})
    _avg?: HabitHistoryDayAvgAggregate;

    @Field(() => HabitHistoryDaySumAggregate, {nullable:true})
    _sum?: HabitHistoryDaySumAggregate;

    @Field(() => HabitHistoryDayMinAggregate, {nullable:true})
    _min?: HabitHistoryDayMinAggregate;

    @Field(() => HabitHistoryDayMaxAggregate, {nullable:true})
    _max?: HabitHistoryDayMaxAggregate;
}
