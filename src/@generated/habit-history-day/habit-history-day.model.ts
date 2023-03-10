import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Habit } from '../habit/habit.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitHistoryDay {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Habit, {nullable:false})
    Habit?: Habit;

    @Field(() => String, {nullable:false})
    habitId!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    frequencyOnThisDay!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    doneTimes!: number;

    @Field(() => [Int], {nullable:true})
    secondsPerFrequency!: Array<number>;
}
