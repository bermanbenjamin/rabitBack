import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@ObjectType()
export class HabitPlantMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    positionBot?: number;

    @Field(() => Int, {nullable:true})
    positionLeft?: number;

    @Field(() => PlantEnum, {nullable:true})
    plant?: keyof typeof PlantEnum;
}
