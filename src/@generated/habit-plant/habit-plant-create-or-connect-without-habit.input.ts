import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { Type } from 'class-transformer';
import { HabitPlantCreateWithoutHabitInput } from './habit-plant-create-without-habit.input';

@InputType()
export class HabitPlantCreateOrConnectWithoutHabitInput {

    @Field(() => HabitPlantWhereUniqueInput, {nullable:false})
    @Type(() => HabitPlantWhereUniqueInput)
    where!: HabitPlantWhereUniqueInput;

    @Field(() => HabitPlantCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitPlantCreateWithoutHabitInput)
    create!: HabitPlantCreateWithoutHabitInput;
}
