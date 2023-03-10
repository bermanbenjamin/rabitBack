import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalWhereInput } from './habit-interval-where.input';
import { Type } from 'class-transformer';
import { HabitIntervalOrderByWithAggregationInput } from './habit-interval-order-by-with-aggregation.input';
import { HabitIntervalScalarFieldEnum } from './habit-interval-scalar-field.enum';
import { HabitIntervalScalarWhereWithAggregatesInput } from './habit-interval-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HabitIntervalCountAggregateInput } from './habit-interval-count-aggregate.input';
import { HabitIntervalAvgAggregateInput } from './habit-interval-avg-aggregate.input';
import { HabitIntervalSumAggregateInput } from './habit-interval-sum-aggregate.input';
import { HabitIntervalMinAggregateInput } from './habit-interval-min-aggregate.input';
import { HabitIntervalMaxAggregateInput } from './habit-interval-max-aggregate.input';

@ArgsType()
export class HabitIntervalGroupByArgs {

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    @Type(() => HabitIntervalWhereInput)
    where?: HabitIntervalWhereInput;

    @Field(() => [HabitIntervalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HabitIntervalOrderByWithAggregationInput>;

    @Field(() => [HabitIntervalScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HabitIntervalScalarFieldEnum>;

    @Field(() => HabitIntervalScalarWhereWithAggregatesInput, {nullable:true})
    having?: HabitIntervalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitIntervalCountAggregateInput, {nullable:true})
    _count?: HabitIntervalCountAggregateInput;

    @Field(() => HabitIntervalAvgAggregateInput, {nullable:true})
    _avg?: HabitIntervalAvgAggregateInput;

    @Field(() => HabitIntervalSumAggregateInput, {nullable:true})
    _sum?: HabitIntervalSumAggregateInput;

    @Field(() => HabitIntervalMinAggregateInput, {nullable:true})
    _min?: HabitIntervalMinAggregateInput;

    @Field(() => HabitIntervalMaxAggregateInput, {nullable:true})
    _max?: HabitIntervalMaxAggregateInput;
}
