import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ToDoTaskCreatedaysOfWeekInput } from './to-do-task-createdays-of-week.input';
import { DateTimeRepeatEnum } from '../prisma/date-time-repeat.enum';

@InputType()
export class ToDoTaskCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    toDoListId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastDone?: Date | string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Int, {nullable:true})
    frequenciesByRepeatType?: number;

    @Field(() => ToDoTaskCreatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: ToDoTaskCreatedaysOfWeekInput;

    @Field(() => DateTimeRepeatEnum, {nullable:true})
    repeatType?: keyof typeof DateTimeRepeatEnum;
}
