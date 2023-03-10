import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HabitReminderCountAggregate } from './habit-reminder-count-aggregate.output';
import { HabitReminderMinAggregate } from './habit-reminder-min-aggregate.output';
import { HabitReminderMaxAggregate } from './habit-reminder-max-aggregate.output';

@ObjectType()
export class AggregateHabitReminder {

    @Field(() => HabitReminderCountAggregate, {nullable:true})
    _count?: HabitReminderCountAggregate;

    @Field(() => HabitReminderMinAggregate, {nullable:true})
    _min?: HabitReminderMinAggregate;

    @Field(() => HabitReminderMaxAggregate, {nullable:true})
    _max?: HabitReminderMaxAggregate;
}
