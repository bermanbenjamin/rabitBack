import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitPlantCountOrderByAggregateInput } from './habit-plant-count-order-by-aggregate.input';
import { HabitPlantAvgOrderByAggregateInput } from './habit-plant-avg-order-by-aggregate.input';
import { HabitPlantMaxOrderByAggregateInput } from './habit-plant-max-order-by-aggregate.input';
import { HabitPlantMinOrderByAggregateInput } from './habit-plant-min-order-by-aggregate.input';
import { HabitPlantSumOrderByAggregateInput } from './habit-plant-sum-order-by-aggregate.input';

@InputType()
export class HabitPlantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    positionBot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    positionLeft?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    plant?: keyof typeof SortOrder;

    @Field(() => HabitPlantCountOrderByAggregateInput, {nullable:true})
    _count?: HabitPlantCountOrderByAggregateInput;

    @Field(() => HabitPlantAvgOrderByAggregateInput, {nullable:true})
    _avg?: HabitPlantAvgOrderByAggregateInput;

    @Field(() => HabitPlantMaxOrderByAggregateInput, {nullable:true})
    _max?: HabitPlantMaxOrderByAggregateInput;

    @Field(() => HabitPlantMinOrderByAggregateInput, {nullable:true})
    _min?: HabitPlantMinOrderByAggregateInput;

    @Field(() => HabitPlantSumOrderByAggregateInput, {nullable:true})
    _sum?: HabitPlantSumOrderByAggregateInput;
}
