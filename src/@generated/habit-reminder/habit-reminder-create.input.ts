import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateNestedOneWithoutReminderInput } from '../habit/habit-create-nested-one-without-reminder.input';

@InputType()
export class HabitReminderCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => HabitCreateNestedOneWithoutReminderInput, {nullable:false})
    Habit!: HabitCreateNestedOneWithoutReminderInput;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Boolean, {nullable:true})
    isAlarm?: boolean;
}
