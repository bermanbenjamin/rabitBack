import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitHistoryDayMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    habitId?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    frequencyOnThisDay?: number;

    @Field(() => Int, {nullable:true})
    doneTimes?: number;
}
