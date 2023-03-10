import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';
import { Type } from 'class-transformer';
import { ToDoTaskOrderByWithRelationInput } from './to-do-task-order-by-with-relation.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoTaskCountAggregateInput } from './to-do-task-count-aggregate.input';
import { ToDoTaskAvgAggregateInput } from './to-do-task-avg-aggregate.input';
import { ToDoTaskSumAggregateInput } from './to-do-task-sum-aggregate.input';
import { ToDoTaskMinAggregateInput } from './to-do-task-min-aggregate.input';
import { ToDoTaskMaxAggregateInput } from './to-do-task-max-aggregate.input';

@ArgsType()
export class ToDoTaskAggregateArgs {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    @Type(() => ToDoTaskWhereInput)
    where?: ToDoTaskWhereInput;

    @Field(() => [ToDoTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoTaskOrderByWithRelationInput>;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:true})
    cursor?: ToDoTaskWhereUniqueInput;

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
