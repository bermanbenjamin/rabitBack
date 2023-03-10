import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { HabitReminderUpdateWithoutHabitInput } from './habit-reminder-update-without-habit.input';
import { HabitReminderCreateWithoutHabitInput } from './habit-reminder-create-without-habit.input';

@InputType()
export class HabitReminderUpsertWithWhereUniqueWithoutHabitInput {

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;

    @Field(() => HabitReminderUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitReminderUpdateWithoutHabitInput)
    update!: HabitReminderUpdateWithoutHabitInput;

    @Field(() => HabitReminderCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitReminderCreateWithoutHabitInput)
    create!: HabitReminderCreateWithoutHabitInput;
}
