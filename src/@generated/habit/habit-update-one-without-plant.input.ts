import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutPlantInput } from './habit-create-without-plant.input';
import { HabitCreateOrConnectWithoutPlantInput } from './habit-create-or-connect-without-plant.input';
import { HabitUpsertWithoutPlantInput } from './habit-upsert-without-plant.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutPlantInput } from './habit-update-without-plant.input';

@InputType()
export class HabitUpdateOneWithoutPlantInput {

    @Field(() => HabitCreateWithoutPlantInput, {nullable:true})
    create?: HabitCreateWithoutPlantInput;

    @Field(() => HabitCreateOrConnectWithoutPlantInput, {nullable:true})
    connectOrCreate?: HabitCreateOrConnectWithoutPlantInput;

    @Field(() => HabitUpsertWithoutPlantInput, {nullable:true})
    upsert?: HabitUpsertWithoutPlantInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutPlantInput, {nullable:true})
    update?: HabitUpdateWithoutPlantInput;
}
