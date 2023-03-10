import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToDoListCountAggregate } from './to-do-list-count-aggregate.output';
import { ToDoListMinAggregate } from './to-do-list-min-aggregate.output';
import { ToDoListMaxAggregate } from './to-do-list-max-aggregate.output';

@ObjectType()
export class ToDoListGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ToDoListCountAggregate, {nullable:true})
    _count?: ToDoListCountAggregate;

    @Field(() => ToDoListMinAggregate, {nullable:true})
    _min?: ToDoListMinAggregate;

    @Field(() => ToDoListMaxAggregate, {nullable:true})
    _max?: ToDoListMaxAggregate;
}
