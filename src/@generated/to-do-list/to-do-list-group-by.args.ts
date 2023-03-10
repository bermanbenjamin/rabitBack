import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';
import { Type } from 'class-transformer';
import { ToDoListOrderByWithAggregationInput } from './to-do-list-order-by-with-aggregation.input';
import { ToDoListScalarFieldEnum } from './to-do-list-scalar-field.enum';
import { ToDoListScalarWhereWithAggregatesInput } from './to-do-list-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToDoListCountAggregateInput } from './to-do-list-count-aggregate.input';
import { ToDoListMinAggregateInput } from './to-do-list-min-aggregate.input';
import { ToDoListMaxAggregateInput } from './to-do-list-max-aggregate.input';

@ArgsType()
export class ToDoListGroupByArgs {

    @Field(() => ToDoListWhereInput, {nullable:true})
    @Type(() => ToDoListWhereInput)
    where?: ToDoListWhereInput;

    @Field(() => [ToDoListOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToDoListOrderByWithAggregationInput>;

    @Field(() => [ToDoListScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToDoListScalarFieldEnum>;

    @Field(() => ToDoListScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToDoListScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToDoListCountAggregateInput, {nullable:true})
    _count?: ToDoListCountAggregateInput;

    @Field(() => ToDoListMinAggregateInput, {nullable:true})
    _min?: ToDoListMinAggregateInput;

    @Field(() => ToDoListMaxAggregateInput, {nullable:true})
    _max?: ToDoListMaxAggregateInput;
}
