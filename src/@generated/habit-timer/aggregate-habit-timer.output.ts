import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitTimerCountAggregate } from './habit-timer-count-aggregate.output';
import { HabitTimerMinAggregate } from './habit-timer-min-aggregate.output';
import { HabitTimerMaxAggregate } from './habit-timer-max-aggregate.output';

@ObjectType()
export class AggregateHabitTimer {

    @Field(() => HabitTimerCountAggregate, {nullable:true})
    _count?: HabitTimerCountAggregate;

    @Field(() => HabitTimerMinAggregate, {nullable:true})
    _min?: HabitTimerMinAggregate;

    @Field(() => HabitTimerMaxAggregate, {nullable:true})
    _max?: HabitTimerMaxAggregate;
}
