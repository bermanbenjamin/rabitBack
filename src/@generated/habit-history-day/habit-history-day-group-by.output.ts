import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitHistoryDayCountAggregate } from './habit-history-day-count-aggregate.output';
import { HabitHistoryDayAvgAggregate } from './habit-history-day-avg-aggregate.output';
import { HabitHistoryDaySumAggregate } from './habit-history-day-sum-aggregate.output';
import { HabitHistoryDayMinAggregate } from './habit-history-day-min-aggregate.output';
import { HabitHistoryDayMaxAggregate } from './habit-history-day-max-aggregate.output';

@ObjectType()
export class HabitHistoryDayGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    habitId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Int, {nullable:false})
    frequencyOnThisDay!: number;

    @Field(() => Int, {nullable:false})
    doneTimes!: number;

    @Field(() => [Int], {nullable:true})
    secondsPerFrequency?: Array<number>;

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
