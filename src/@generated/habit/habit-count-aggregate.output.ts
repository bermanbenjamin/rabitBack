import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    routineId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    frequencyPerDay!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    isPaused!: number;

    @Field(() => Int, {nullable:false})
    lastPlantReward!: number;

    @Field(() => Int, {nullable:false})
    isDeleted!: number;

    @Field(() => Int, {nullable:false})
    habitPlantId!: number;

    @Field(() => Int, {nullable:false})
    habitTimerId!: number;

    @Field(() => Int, {nullable:false})
    habitIntervalId!: number;

    @Field(() => Int, {nullable:false})
    color!: number;

    @Field(() => Int, {nullable:false})
    icon!: number;

    @Field(() => Int, {nullable:false})
    period!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
