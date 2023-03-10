import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutPlantInput } from './habit-create-without-plant.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutPlantInput } from './habit-create-or-connect-without-plant.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitUncheckedCreateNestedOneWithoutPlantInput {

    @Field(() => HabitCreateWithoutPlantInput, {nullable:true})
    @Type(() => HabitCreateWithoutPlantInput)
    create?: HabitCreateWithoutPlantInput;

    @Field(() => HabitCreateOrConnectWithoutPlantInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutPlantInput)
    connectOrCreate?: HabitCreateOrConnectWithoutPlantInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
