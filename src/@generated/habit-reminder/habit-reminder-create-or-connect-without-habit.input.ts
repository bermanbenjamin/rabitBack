import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { HabitReminderCreateWithoutHabitInput } from './habit-reminder-create-without-habit.input';

@InputType()
export class HabitReminderCreateOrConnectWithoutHabitInput {

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;

    @Field(() => HabitReminderCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitReminderCreateWithoutHabitInput)
    create!: HabitReminderCreateWithoutHabitInput;
}
