import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantWhereInput } from './habit-plant-where.input';
import { Type } from 'class-transformer';
import { HabitPlantOrderByWithAggregationInput } from './habit-plant-order-by-with-aggregation.input';
import { HabitPlantScalarFieldEnum } from './habit-plant-scalar-field.enum';
import { HabitPlantScalarWhereWithAggregatesInput } from './habit-plant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HabitPlantCountAggregateInput } from './habit-plant-count-aggregate.input';
import { HabitPlantAvgAggregateInput } from './habit-plant-avg-aggregate.input';
import { HabitPlantSumAggregateInput } from './habit-plant-sum-aggregate.input';
import { HabitPlantMinAggregateInput } from './habit-plant-min-aggregate.input';
import { HabitPlantMaxAggregateInput } from './habit-plant-max-aggregate.input';

@ArgsType()
export class HabitPlantGroupByArgs {

    @Field(() => HabitPlantWhereInput, {nullable:true})
    @Type(() => HabitPlantWhereInput)
    where?: HabitPlantWhereInput;

    @Field(() => [HabitPlantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HabitPlantOrderByWithAggregationInput>;

    @Field(() => [HabitPlantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HabitPlantScalarFieldEnum>;

    @Field(() => HabitPlantScalarWhereWithAggregatesInput, {nullable:true})
    having?: HabitPlantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitPlantCountAggregateInput, {nullable:true})
    _count?: HabitPlantCountAggregateInput;

    @Field(() => HabitPlantAvgAggregateInput, {nullable:true})
    _avg?: HabitPlantAvgAggregateInput;

    @Field(() => HabitPlantSumAggregateInput, {nullable:true})
    _sum?: HabitPlantSumAggregateInput;

    @Field(() => HabitPlantMinAggregateInput, {nullable:true})
    _min?: HabitPlantMinAggregateInput;

    @Field(() => HabitPlantMaxAggregateInput, {nullable:true})
    _max?: HabitPlantMaxAggregateInput;
}
