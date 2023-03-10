import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';
import { Type } from 'class-transformer';
import { RoutineOrderByWithRelationInput } from './routine-order-by-with-relation.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoutineCountAggregateInput } from './routine-count-aggregate.input';
import { RoutineMinAggregateInput } from './routine-min-aggregate.input';
import { RoutineMaxAggregateInput } from './routine-max-aggregate.input';

@ArgsType()
export class RoutineAggregateArgs {

    @Field(() => RoutineWhereInput, {nullable:true})
    @Type(() => RoutineWhereInput)
    where?: RoutineWhereInput;

    @Field(() => [RoutineOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoutineOrderByWithRelationInput>;

    @Field(() => RoutineWhereUniqueInput, {nullable:true})
    cursor?: RoutineWhereUniqueInput;

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
