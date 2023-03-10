import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitReminderAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    habitId?: true;
}
