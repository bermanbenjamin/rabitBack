import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutPlantInput } from './habit-create-without-plant.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutPlantInput } from './habit-create-or-connect-without-plant.input';
import { HabitUpsertWithoutPlantInput } from './habit-upsert-without-plant.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutPlantInput } from './habit-update-without-plant.input';

@InputType()
export class HabitUpdateOneWithoutPlantNestedInput {

    @Field(() => HabitCreateWithoutPlantInput, {nullable:true})
    @Type(() => HabitCreateWithoutPlantInput)
    create?: HabitCreateWithoutPlantInput;

    @Field(() => HabitCreateOrConnectWithoutPlantInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutPlantInput)
    connectOrCreate?: HabitCreateOrConnectWithoutPlantInput;

    @Field(() => HabitUpsertWithoutPlantInput, {nullable:true})
    @Type(() => HabitUpsertWithoutPlantInput)
    upsert?: HabitUpsertWithoutPlantInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutPlantInput, {nullable:true})
    @Type(() => HabitUpdateWithoutPlantInput)
    update?: HabitUpdateWithoutPlantInput;
}
