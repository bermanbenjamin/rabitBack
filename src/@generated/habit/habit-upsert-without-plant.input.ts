import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutPlantInput } from './habit-update-without-plant.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutPlantInput } from './habit-create-without-plant.input';

@InputType()
export class HabitUpsertWithoutPlantInput {

    @Field(() => HabitUpdateWithoutPlantInput, {nullable:false})
    @Type(() => HabitUpdateWithoutPlantInput)
    update!: HabitUpdateWithoutPlantInput;

    @Field(() => HabitCreateWithoutPlantInput, {nullable:false})
    @Type(() => HabitCreateWithoutPlantInput)
    create!: HabitCreateWithoutPlantInput;
}
