import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    age?: true;

    @Field(() => Boolean, {nullable:true})
    birthdate?: true;

    @Field(() => Boolean, {nullable:true})
    coins?: true;

    @Field(() => Boolean, {nullable:true})
    bestStreak?: true;

    @Field(() => Boolean, {nullable:true})
    currentStreak?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;

    @Field(() => Boolean, {nullable:true})
    lastDailyReward?: true;

    @Field(() => Boolean, {nullable:true})
    dailyRewardCount?: true;

    @Field(() => Boolean, {nullable:true})
    userSettingsId?: true;
}
