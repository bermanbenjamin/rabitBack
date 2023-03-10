import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ToDoTaskSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    frequenciesByRepeatType?: true;

    @Field(() => Boolean, {nullable:true})
    daysOfWeek?: true;
}
