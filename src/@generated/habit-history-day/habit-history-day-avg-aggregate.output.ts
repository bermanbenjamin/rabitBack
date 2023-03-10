import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HabitHistoryDayAvgAggregate {

    @Field(() => Float, {nullable:true})
    frequencyOnThisDay?: number;

    @Field(() => Float, {nullable:true})
    doneTimes?: number;

    @Field(() => Float, {nullable:true})
    secondsPerFrequency?: number;
}
