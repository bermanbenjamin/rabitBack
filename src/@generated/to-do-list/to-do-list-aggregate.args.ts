import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';
import { Type } from 'class-transformer';
import { ToDoListOrderByWithRelationInput } from './to-do-list-order-by-with-relation.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoListCountAggregateInput } from './to-do-list-count-aggregate.input';
import { ToDoListMinAggregateInput } from './to-do-list-min-aggregate.input';
import { ToDoListMaxAggregateInput } from './to-do-list-max-aggregate.input';

@ArgsType()
export class ToDoListAggregateArgs {

    @Field(() => ToDoListWhereInput, {nullable:true})
    @Type(() => ToDoListWhereInput)
    where?: ToDoListWhereInput;

    @Field(() => [ToDoListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoListOrderByWithRelationInput>;

    @Field(() => ToDoListWhereUniqueInput, {nullable:true})
    cursor?: ToDoListWhereUniqueInput;

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
