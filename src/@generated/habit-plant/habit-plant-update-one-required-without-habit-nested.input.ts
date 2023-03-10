import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantCreateWithoutHabitInput } from './habit-plant-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitPlantCreateOrConnectWithoutHabitInput } from './habit-plant-create-or-connect-without-habit.input';
import { HabitPlantUpsertWithoutHabitInput } from './habit-plant-upsert-without-habit.input';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { HabitPlantUpdateWithoutHabitInput } from './habit-plant-update-without-habit.input';

@InputType()
export class HabitPlantUpdateOneRequiredWithoutHabitNestedInput {

    @Field(() => HabitPlantCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantCreateWithoutHabitInput)
    create?: HabitPlantCreateWithoutHabitInput;

    @Field(() => HabitPlantCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitPlantCreateOrConnectWithoutHabitInput;

    @Field(() => HabitPlantUpsertWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantUpsertWithoutHabitInput)
    upsert?: HabitPlantUpsertWithoutHabitInput;

    @Field(() => HabitPlantWhereUniqueInput, {nullable:true})
    @Type(() => HabitPlantWhereUniqueInput)
    connect?: HabitPlantWhereUniqueInput;

    @Field(() => HabitPlantUpdateWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantUpdateWithoutHabitInput)
    update?: HabitPlantUpdateWithoutHabitInput;
}
