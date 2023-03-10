import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitHistoryDayCreatesecondsPerFrequencyInput } from './habit-history-day-createseconds-per-frequency.input';

@InputType()
export class HabitHistoryDayCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    habitId!: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    frequencyOnThisDay?: number;

    @Field(() => Int, {nullable:true})
    doneTimes?: number;

    @Field(() => HabitHistoryDayCreatesecondsPerFrequencyInput, {nullable:true})
    secondsPerFrequency?: HabitHistoryDayCreatesecondsPerFrequencyInput;
}
