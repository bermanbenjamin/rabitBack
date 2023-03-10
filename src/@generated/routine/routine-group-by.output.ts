import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoutineCountAggregate } from './routine-count-aggregate.output';
import { RoutineMinAggregate } from './routine-min-aggregate.output';
import { RoutineMaxAggregate } from './routine-max-aggregate.output';

@ObjectType()
export class RoutineGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => RoutineCountAggregate, {nullable:true})
    _count?: RoutineCountAggregate;

    @Field(() => RoutineMinAggregate, {nullable:true})
    _min?: RoutineMinAggregate;

    @Field(() => RoutineMaxAggregate, {nullable:true})
    _max?: RoutineMaxAggregate;
}
