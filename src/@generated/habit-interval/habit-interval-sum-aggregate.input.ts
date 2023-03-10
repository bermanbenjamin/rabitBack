import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitIntervalSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    timesPerWeek?: true;

    @Field(() => Boolean, {nullable:true})
    daysOfWeek?: true;
}
