import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from '../prisma/date-time-repeat.enum';
import { ToDoSubtask } from '../to-do-subtask/to-do-subtask.model';
import { ToDoList } from '../to-do-list/to-do-list.model';
import { ToDoTaskCount } from './to-do-task-count.output';

@ObjectType()
export class ToDoTask {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    toDoListId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    lastDone!: Date | null;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Int, {nullable:false,defaultValue:1})
    frequenciesByRepeatType!: number;

    @Field(() => [Int], {nullable:true})
    daysOfWeek!: Array<number>;

    @Field(() => DateTimeRepeatEnum, {nullable:false,defaultValue:'never'})
    repeatType!: keyof typeof DateTimeRepeatEnum;

    @Field(() => [ToDoSubtask], {nullable:true})
    subTasks?: Array<ToDoSubtask>;

    @Field(() => ToDoList, {nullable:false})
    toDoList?: ToDoList;

    @Field(() => ToDoTaskCount, {nullable:false})
    _count?: ToDoTaskCount;
}
