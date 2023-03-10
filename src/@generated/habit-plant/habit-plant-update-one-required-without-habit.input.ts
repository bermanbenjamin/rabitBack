import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantCreateWithoutHabitInput } from './habit-plant-create-without-habit.input';
import { HabitPlantCreateOrConnectWithoutHabitInput } from './habit-plant-create-or-connect-without-habit.input';
import { HabitPlantUpsertWithoutHabitInput } from './habit-plant-upsert-without-habit.input';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { HabitPlantUpdateWithoutHabitInput } from './habit-plant-update-without-habit.input';

@InputType()
export class HabitPlantUpdateOneRequiredWithoutHabitInput {

    @Field(() => HabitPlantCreateWithoutHabitInput, {nullable:true})
    create?: HabitPlantCreateWithoutHabitInput;

    @Field(() => HabitPlantCreateOrConnectWithoutHabitInput, {nullable:true})
    connectOrCreate?: HabitPlantCreateOrConnectWithoutHabitInput;

    @Field(() => HabitPlantUpsertWithoutHabitInput, {nullable:true})
    upsert?: HabitPlantUpsertWithoutHabitInput;

    @Field(() => HabitPlantWhereUniqueInput, {nullable:true})
    connect?: HabitPlantWhereUniqueInput;

    @Field(() => HabitPlantUpdateWithoutHabitInput, {nullable:true})
    update?: HabitPlantUpdateWithoutHabitInput;
}
