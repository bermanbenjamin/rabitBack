import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HabitPlantAvgAggregate {

    @Field(() => Float, {nullable:true})
    positionBot?: number;

    @Field(() => Float, {nullable:true})
    positionLeft?: number;
}
