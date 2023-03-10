import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSumAggregate {

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => Int, {nullable:true})
    coins?: number;

    @Field(() => Int, {nullable:true})
    bestStreak?: number;

    @Field(() => Int, {nullable:true})
    currentStreak?: number;

    @Field(() => Int, {nullable:true})
    dailyRewardCount?: number;
}
