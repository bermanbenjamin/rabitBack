import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitIntervalCountAggregate } from './habit-interval-count-aggregate.output';
import { HabitIntervalAvgAggregate } from './habit-interval-avg-aggregate.output';
import { HabitIntervalSumAggregate } from './habit-interval-sum-aggregate.output';
import { HabitIntervalMinAggregate } from './habit-interval-min-aggregate.output';
import { HabitIntervalMaxAggregate } from './habit-interval-max-aggregate.output';

@ObjectType()
export class AggregateHabitInterval {

    @Field(() => HabitIntervalCountAggregate, {nullable:true})
    _count?: HabitIntervalCountAggregate;

    @Field(() => HabitIntervalAvgAggregate, {nullable:true})
    _avg?: HabitIntervalAvgAggregate;

    @Field(() => HabitIntervalSumAggregate, {nullable:true})
    _sum?: HabitIntervalSumAggregate;

    @Field(() => HabitIntervalMinAggregate, {nullable:true})
    _min?: HabitIntervalMinAggregate;

    @Field(() => HabitIntervalMaxAggregate, {nullable:true})
    _max?: HabitIntervalMaxAggregate;
}
