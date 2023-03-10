import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerUpdateWithoutHabitInput } from './habit-timer-update-without-habit.input';
import { Type } from 'class-transformer';
import { HabitTimerCreateWithoutHabitInput } from './habit-timer-create-without-habit.input';

@InputType()
export class HabitTimerUpsertWithoutHabitInput {

    @Field(() => HabitTimerUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitTimerUpdateWithoutHabitInput)
    update!: HabitTimerUpdateWithoutHabitInput;

    @Field(() => HabitTimerCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitTimerCreateWithoutHabitInput)
    create!: HabitTimerCreateWithoutHabitInput;
}
