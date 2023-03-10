import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HabitIntervalAvgAggregate {

    @Field(() => Float, {nullable:true})
    timesPerWeek?: number;

    @Field(() => Float, {nullable:true})
    daysOfWeek?: number;
}
