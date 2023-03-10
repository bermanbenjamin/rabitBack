import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';
import { Type } from 'class-transformer';
import { ToDoTaskOrderByWithAggregationInput } from './to-do-task-order-by-with-aggregation.input';
import { ToDoTaskScalarFieldEnum } from './to-do-task-scalar-field.enum';
import { ToDoTaskScalarWhereWithAggregatesInput } from './to-do-task-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToDoTaskCountAggregateInput } from './to-do-task-count-aggregate.input';
import { ToDoTaskAvgAggregateInput } from './to-do-task-avg-aggregate.input';
import { ToDoTaskSumAggregateInput } from './to-do-task-sum-aggregate.input';
import { ToDoTaskMinAggregateInput } from './to-do-task-min-aggregate.input';
import { ToDoTaskMaxAggregateInput } from './to-do-task-max-aggregate.input';

@ArgsType()
export class ToDoTaskGroupByArgs {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    @Type(() => ToDoTaskWhereInput)
    where?: ToDoTaskWhereInput;

    @Field(() => [ToDoTaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToDoTaskOrderByWithAggregationInput>;

    @Field(() => [ToDoTaskScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToDoTaskScalarFieldEnum>;

    @Field(() => ToDoTaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToDoTaskScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToDoTaskCountAggregateInput, {nullable:true})
    _count?: ToDoTaskCountAggregateInput;

    @Field(() => ToDoTaskAvgAggregateInput, {nullable:true})
    _avg?: ToDoTaskAvgAggregateInput;

    @Field(() => ToDoTaskSumAggregateInput, {nullable:true})
    _sum?: ToDoTaskSumAggregateInput;

    @Field(() => ToDoTaskMinAggregateInput, {nullable:true})
    _min?: ToDoTaskMinAggregateInput;

    @Field(() => ToDoTaskMaxAggregateInput, {nullable:true})
    _max?: ToDoTaskMaxAggregateInput;
}
