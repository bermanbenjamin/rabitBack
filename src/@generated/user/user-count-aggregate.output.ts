import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Int, {nullable:false})
    birthdate!: number;

    @Field(() => Int, {nullable:false})
    coins!: number;

    @Field(() => Int, {nullable:false})
    bestStreak!: number;

    @Field(() => Int, {nullable:false})
    currentStreak!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    isDeleted!: number;

    @Field(() => Int, {nullable:false})
    lastDailyReward!: number;

    @Field(() => Int, {nullable:false})
    dailyRewardCount!: number;

    @Field(() => Int, {nullable:false})
    userSettingsId!: number;

    @Field(() => Int, {nullable:false})
    plants!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
