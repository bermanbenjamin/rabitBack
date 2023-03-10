import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitHistoryDaySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    frequencyOnThisDay?: true;

    @Field(() => Boolean, {nullable:true})
    doneTimes?: true;

    @Field(() => Boolean, {nullable:true})
    secondsPerFrequency?: true;
}
