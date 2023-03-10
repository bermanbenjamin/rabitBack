import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantUpdateWithoutHabitInput } from './habit-plant-update-without-habit.input';
import { Type } from 'class-transformer';
import { HabitPlantCreateWithoutHabitInput } from './habit-plant-create-without-habit.input';

@InputType()
export class HabitPlantUpsertWithoutHabitInput {

    @Field(() => HabitPlantUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitPlantUpdateWithoutHabitInput)
    update!: HabitPlantUpdateWithoutHabitInput;

    @Field(() => HabitPlantCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitPlantCreateWithoutHabitInput)
    create!: HabitPlantCreateWithoutHabitInput;
}
