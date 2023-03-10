import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskOrderByWithRelationInput } from './to-do-subtask-order-by-with-relation.input';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoSubtaskCountAggregateInput } from './to-do-subtask-count-aggregate.input';
import { ToDoSubtaskMinAggregateInput } from './to-do-subtask-min-aggregate.input';
import { ToDoSubtaskMaxAggregateInput } from './to-do-subtask-max-aggregate.input';

@ArgsType()
export class ToDoSubtaskAggregateArgs {

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    @Type(() => ToDoSubtaskWhereInput)
    where?: ToDoSubtaskWhereInput;

    @Field(() => [ToDoSubtaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoSubtaskOrderByWithRelationInput>;

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:true})
    cursor?: ToDoSubtaskWhereUniqueInput;

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
