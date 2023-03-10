import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {

    @Field(() => Float, {nullable:true})
    age?: number;

    @Field(() => Float, {nullable:true})
    coins?: number;

    @Field(() => Float, {nullable:true})
    bestStreak?: number;

    @Field(() => Float, {nullable:true})
    currentStreak?: number;

    @Field(() => Float, {nullable:true})
    dailyRewardCount?: number;
}
