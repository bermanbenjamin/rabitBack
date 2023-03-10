import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToDoListCountAggregate } from './to-do-list-count-aggregate.output';
import { ToDoListMinAggregate } from './to-do-list-min-aggregate.output';
import { ToDoListMaxAggregate } from './to-do-list-max-aggregate.output';

@ObjectType()
export class AggregateToDoList {

    @Field(() => ToDoListCountAggregate, {nullable:true})
    _count?: ToDoListCountAggregate;

    @Field(() => ToDoListMinAggregate, {nullable:true})
    _min?: ToDoListMinAggregate;

    @Field(() => ToDoListMaxAggregate, {nullable:true})
    _max?: ToDoListMaxAggregate;
}
