import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Habit } from '../habit/habit.model';

@ObjectType()
export class HabitReminder {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Habit, {nullable:false})
    Habit?: Habit;

    @Field(() => String, {nullable:false})
    habitId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAlarm!: boolean;
}
