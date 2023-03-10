import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitPlantCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    positionBot!: number;

    @Field(() => Int, {nullable:false})
    positionLeft!: number;

    @Field(() => Int, {nullable:false})
    plant!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
