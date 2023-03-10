import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitHistoryDayCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    habitId!: number;

    @Field(() => Int, {nullable:false})
    date!: number;

    @Field(() => Int, {nullable:false})
    frequencyOnThisDay!: number;

    @Field(() => Int, {nullable:false})
    doneTimes!: number;

    @Field(() => Int, {nullable:false})
    secondsPerFrequency!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
