import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@InputType()
export class HabitPlantCreateWithoutHabitInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => PlantEnum, {nullable:true})
    plant?: keyof typeof PlantEnum;
}
