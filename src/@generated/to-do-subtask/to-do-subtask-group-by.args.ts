import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskOrderByWithAggregationInput } from './to-do-subtask-order-by-with-aggregation.input';
import { ToDoSubtaskScalarFieldEnum } from './to-do-subtask-scalar-field.enum';
import { ToDoSubtaskScalarWhereWithAggregatesInput } from './to-do-subtask-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ToDoSubtaskCountAggregateInput } from './to-do-subtask-count-aggregate.input';
import { ToDoSubtaskMinAggregateInput } from './to-do-subtask-min-aggregate.input';
import { ToDoSubtaskMaxAggregateInput } from './to-do-subtask-max-aggregate.input';

@ArgsType()
export class ToDoSubtaskGroupByArgs {

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    @Type(() => ToDoSubtaskWhereInput)
    where?: ToDoSubtaskWhereInput;

    @Field(() => [ToDoSubtaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ToDoSubtaskOrderByWithAggregationInput>;

    @Field(() => [ToDoSubtaskScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ToDoSubtaskScalarFieldEnum>;

    @Field(() => ToDoSubtaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: ToDoSubtaskScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ToDoSubtaskCountAggregateInput, {nullable:true})
    _count?: ToDoSubtaskCountAggregateInput;

    @Field(() => ToDoSubtaskMinAggregateInput, {nullable:true})
    _min?: ToDoSubtaskMinAggregateInput;

    @Field(() => ToDoSubtaskMaxAggregateInput, {nullable:true})
    _max?: ToDoSubtaskMaxAggregateInput;
}
