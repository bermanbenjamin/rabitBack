import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';
import { Type } from 'class-transformer';
import { RoutineOrderByWithAggregationInput } from './routine-order-by-with-aggregation.input';
import { RoutineScalarFieldEnum } from './routine-scalar-field.enum';
import { RoutineScalarWhereWithAggregatesInput } from './routine-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RoutineCountAggregateInput } from './routine-count-aggregate.input';
import { RoutineMinAggregateInput } from './routine-min-aggregate.input';
import { RoutineMaxAggregateInput } from './routine-max-aggregate.input';

@ArgsType()
export class RoutineGroupByArgs {

    @Field(() => RoutineWhereInput, {nullable:true})
    @Type(() => RoutineWhereInput)
    where?: RoutineWhereInput;

    @Field(() => [RoutineOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RoutineOrderByWithAggregationInput>;

    @Field(() => [RoutineScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RoutineScalarFieldEnum>;

    @Field(() => RoutineScalarWhereWithAggregatesInput, {nullable:true})
    having?: RoutineScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoutineCountAggregateInput, {nullable:true})
    _count?: RoutineCountAggregateInput;

    @Field(() => RoutineMinAggregateInput, {nullable:true})
    _min?: RoutineMinAggregateInput;

    @Field(() => RoutineMaxAggregateInput, {nullable:true})
    _max?: RoutineMaxAggregateInput;
}
