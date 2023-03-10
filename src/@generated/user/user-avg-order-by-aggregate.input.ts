import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coins?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bestStreak?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentStreak?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dailyRewardCount?: keyof typeof SortOrder;
}
