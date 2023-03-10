import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitIntervalAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    timesPerWeek?: true;

    @Field(() => Boolean, {nullable:true})
    daysOfWeek?: true;
}
