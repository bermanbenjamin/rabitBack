import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalUpdateWithoutHabitInput } from './habit-interval-update-without-habit.input';
import { Type } from 'class-transformer';
import { HabitIntervalCreateWithoutHabitInput } from './habit-interval-create-without-habit.input';

@InputType()
export class HabitIntervalUpsertWithoutHabitInput {

    @Field(() => HabitIntervalUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitIntervalUpdateWithoutHabitInput)
    update!: HabitIntervalUpdateWithoutHabitInput;

    @Field(() => HabitIntervalCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitIntervalCreateWithoutHabitInput)
    create!: HabitIntervalCreateWithoutHabitInput;
}
