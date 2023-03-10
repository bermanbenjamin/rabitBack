import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderWhereInput } from './habit-reminder-where.input';

@InputType()
export class HabitReminderListRelationFilter {

    @Field(() => HabitReminderWhereInput, {nullable:true})
    every?: HabitReminderWhereInput;

    @Field(() => HabitReminderWhereInput, {nullable:true})
    some?: HabitReminderWhereInput;

    @Field(() => HabitReminderWhereInput, {nullable:true})
    none?: HabitReminderWhereInput;
}
