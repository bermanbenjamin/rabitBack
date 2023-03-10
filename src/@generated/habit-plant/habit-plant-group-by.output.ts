import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';
import { HabitPlantCountAggregate } from './habit-plant-count-aggregate.output';
import { HabitPlantAvgAggregate } from './habit-plant-avg-aggregate.output';
import { HabitPlantSumAggregate } from './habit-plant-sum-aggregate.output';
import { HabitPlantMinAggregate } from './habit-plant-min-aggregate.output';
import { HabitPlantMaxAggregate } from './habit-plant-max-aggregate.output';

@ObjectType()
export class HabitPlantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => PlantEnum, {nullable:false})
    plant!: keyof typeof PlantEnum;

    @Field(() => HabitPlantCountAggregate, {nullable:true})
    _count?: HabitPlantCountAggregate;

    @Field(() => HabitPlantAvgAggregate, {nullable:true})
    _avg?: HabitPlantAvgAggregate;

    @Field(() => HabitPlantSumAggregate, {nullable:true})
    _sum?: HabitPlantSumAggregate;

    @Field(() => HabitPlantMinAggregate, {nullable:true})
    _min?: HabitPlantMinAggregate;

    @Field(() => HabitPlantMaxAggregate, {nullable:true})
    _max?: HabitPlantMaxAggregate;
}
