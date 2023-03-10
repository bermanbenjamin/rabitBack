import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from '../prisma/date-time-repeat.enum';

@ObjectType()
export class ToDoTaskMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    toDoListId?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastDone?: Date | string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Int, {nullable:true})
    frequenciesByRepeatType?: number;

    @Field(() => DateTimeRepeatEnum, {nullable:true})
    repeatType?: keyof typeof DateTimeRepeatEnum;
}
