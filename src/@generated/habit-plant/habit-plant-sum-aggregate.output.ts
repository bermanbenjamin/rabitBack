import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitPlantSumAggregate {

    @Field(() => Int, {nullable:true})
    positionBot?: number;

    @Field(() => Int, {nullable:true})
    positionLeft?: number;
}
