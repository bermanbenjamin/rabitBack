import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitIntervalSumAggregate {

    @Field(() => Int, {nullable:true})
    timesPerWeek?: number;

    @Field(() => [Int], {nullable:true})
    daysOfWeek?: Array<number>;
}
