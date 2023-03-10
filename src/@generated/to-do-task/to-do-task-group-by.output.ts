import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from '../prisma/date-time-repeat.enum';
import { ToDoTaskCountAggregate } from './to-do-task-count-aggregate.output';
import { ToDoTaskAvgAggregate } from './to-do-task-avg-aggregate.output';
import { ToDoTaskSumAggregate } from './to-do-task-sum-aggregate.output';
import { ToDoTaskMinAggregate } from './to-do-task-min-aggregate.output';
import { ToDoTaskMaxAggregate } from './to-do-task-max-aggregate.output';

@ObjectType()
export class ToDoTaskGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    toDoListId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    lastDone?: Date | string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Int, {nullable:false})
    frequenciesByRepeatType!: number;

    @Field(() => [Int], {nullable:true})
    daysOfWeek?: Array<number>;

    @Field(() => DateTimeRepeatEnum, {nullable:false})
    repeatType!: keyof typeof DateTimeRepeatEnum;

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
