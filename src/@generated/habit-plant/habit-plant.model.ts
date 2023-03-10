import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Habit } from '../habit/habit.model';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@ObjectType()
export class HabitPlant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Habit, {nullable:true})
    habit?: Habit | null;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => PlantEnum, {nullable:false,defaultValue:'piuva'})
    plant!: keyof typeof PlantEnum;
}
