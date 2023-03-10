import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitHistoryDaySumAggregate {

    @Field(() => Int, {nullable:true})
    frequencyOnThisDay?: number;

    @Field(() => Int, {nullable:true})
    doneTimes?: number;

    @Field(() => [Int], {nullable:true})
    secondsPerFrequency?: Array<number>;
}
