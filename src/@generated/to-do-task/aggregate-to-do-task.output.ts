import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ToDoTaskCountAggregate } from './to-do-task-count-aggregate.output';
import { ToDoTaskAvgAggregate } from './to-do-task-avg-aggregate.output';
import { ToDoTaskSumAggregate } from './to-do-task-sum-aggregate.output';
import { ToDoTaskMinAggregate } from './to-do-task-min-aggregate.output';
import { ToDoTaskMaxAggregate } from './to-do-task-max-aggregate.output';

@ObjectType()
export class AggregateToDoTask {

    @Field(() => ToDoTaskCountAggregate, {nullable:true})
    _count?: ToDoTaskCountAggregate;

    @Field(() => ToDoTaskAvgAggregate, {nullable:true})
    _avg?: ToDoTaskAvgAggregate;

    @Field(() => ToDoTaskSumAggregate, {nullable:true})
    _sum?: ToDoTaskSumAggregate;

    @Field(() => ToDoTaskMinAggregate, {nullable:true})
    _min?: ToDoTaskMinAggregate;

    @Field(() => ToDoTaskMaxAggregate, {nullable:true})
    _max?: ToDoTaskMaxAggregate;
}
