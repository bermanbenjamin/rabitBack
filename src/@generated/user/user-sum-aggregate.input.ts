import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;

    @Field(() => Boolean, {nullable:true})
    coins?: true;

    @Field(() => Boolean, {nullable:true})
    bestStreak?: true;

    @Field(() => Boolean, {nullable:true})
    currentStreak?: true;

    @Field(() => Boolean, {nullable:true})
    dailyRewardCount?: true;
}
