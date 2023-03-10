import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutReminderInput } from './habit-update-without-reminder.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutReminderInput } from './habit-create-without-reminder.input';

@InputType()
export class HabitUpsertWithoutReminderInput {

    @Field(() => HabitUpdateWithoutReminderInput, {nullable:false})
    @Type(() => HabitUpdateWithoutReminderInput)
    update!: HabitUpdateWithoutReminderInput;

    @Field(() => HabitCreateWithoutReminderInput, {nullable:false})
    @Type(() => HabitCreateWithoutReminderInput)
    create!: HabitCreateWithoutReminderInput;
}
