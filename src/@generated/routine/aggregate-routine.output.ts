import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoutineCountAggregate } from './routine-count-aggregate.output';
import { RoutineMinAggregate } from './routine-min-aggregate.output';
import { RoutineMaxAggregate } from './routine-max-aggregate.output';

@ObjectType()
export class AggregateRoutine {

    @Field(() => RoutineCountAggregate, {nullable:true})
    _count?: RoutineCountAggregate;

    @Field(() => RoutineMinAggregate, {nullable:true})
    _min?: RoutineMinAggregate;

    @Field(() => RoutineMaxAggregate, {nullable:true})
    _max?: RoutineMaxAggregate;
}
