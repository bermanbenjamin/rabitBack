import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitCountOrderByAggregateInput } from './habit-count-order-by-aggregate.input';
import { HabitAvgOrderByAggregateInput } from './habit-avg-order-by-aggregate.input';
import { HabitMaxOrderByAggregateInput } from './habit-max-order-by-aggregate.input';
import { HabitMinOrderByAggregateInput } from './habit-min-order-by-aggregate.input';
import { HabitSumOrderByAggregateInput } from './habit-sum-order-by-aggregate.input';

@InputType()
export class HabitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    routineId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frequencyPerDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPaused?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastPlantReward?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitPlantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitTimerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitIntervalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    period?: keyof typeof SortOrder;

    @Field(() => HabitCountOrderByAggregateInput, {nullable:true})
    _count?: HabitCountOrderByAggregateInput;

    @Field(() => HabitAvgOrderByAggregateInput, {nullable:true})
    _avg?: HabitAvgOrderByAggregateInput;

    @Field(() => HabitMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitMaxOrderByAggregateInput;

    @Field(() => HabitMinOrderByAggregateInput, {nullable:true})
    _min?: HabitMinOrderByAggregateInput;

    @Field(() => HabitSumOrderByAggregateInput, {nullable:true})
    _sum?: HabitSumOrderByAggregateInput;
}
