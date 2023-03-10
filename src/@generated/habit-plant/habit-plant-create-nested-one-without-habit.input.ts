import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantCreateWithoutHabitInput } from './habit-plant-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitPlantCreateOrConnectWithoutHabitInput } from './habit-plant-create-or-connect-without-habit.input';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';

@InputType()
export class HabitPlantCreateNestedOneWithoutHabitInput {

    @Field(() => HabitPlantCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantCreateWithoutHabitInput)
    create?: HabitPlantCreateWithoutHabitInput;

    @Field(() => HabitPlantCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitPlantCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitPlantCreateOrConnectWithoutHabitInput;

    @Field(() => HabitPlantWhereUniqueInput, {nullable:true})
    @Type(() => HabitPlantWhereUniqueInput)
    connect?: HabitPlantWhereUniqueInput;
}
