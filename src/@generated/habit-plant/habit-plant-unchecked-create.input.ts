import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUncheckedCreateNestedOneWithoutPlantInput } from '../habit/habit-unchecked-create-nested-one-without-plant.input';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@InputType()
export class HabitPlantUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => HabitUncheckedCreateNestedOneWithoutPlantInput, {nullable:true})
    habit?: HabitUncheckedCreateNestedOneWithoutPlantInput;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => PlantEnum, {nullable:true})
    plant?: keyof typeof PlantEnum;
}
