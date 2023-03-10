import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateNestedOneWithoutPlantInput } from '../habit/habit-create-nested-one-without-plant.input';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@InputType()
export class HabitPlantCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => HabitCreateNestedOneWithoutPlantInput, {nullable:true})
    habit?: HabitCreateNestedOneWithoutPlantInput;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => PlantEnum, {nullable:true})
    plant?: keyof typeof PlantEnum;
}
