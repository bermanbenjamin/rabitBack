import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToDoSubtaskCountAggregate } from './to-do-subtask-count-aggregate.output';
import { ToDoSubtaskMinAggregate } from './to-do-subtask-min-aggregate.output';
import { ToDoSubtaskMaxAggregate } from './to-do-subtask-max-aggregate.output';

@ObjectType()
export class AggregateToDoSubtask {

    @Field(() => ToDoSubtaskCountAggregate, {nullable:true})
    _count?: ToDoSubtaskCountAggregate;

    @Field(() => ToDoSubtaskMinAggregate, {nullable:true})
    _min?: ToDoSubtaskMinAggregate;

    @Field(() => ToDoSubtaskMaxAggregate, {nullable:true})
    _max?: ToDoSubtaskMaxAggregate;
}
