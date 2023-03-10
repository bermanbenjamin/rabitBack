import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitReminderSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    habitId?: true;
}
