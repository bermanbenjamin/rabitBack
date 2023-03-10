import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { HabitReminderUpdateWithoutHabitInput } from './habit-reminder-update-without-habit.input';

@InputType()
export class HabitReminderUpdateWithWhereUniqueWithoutHabitInput {

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;

    @Field(() => HabitReminderUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitReminderUpdateWithoutHabitInput)
    data!: HabitReminderUpdateWithoutHabitInput;
}
