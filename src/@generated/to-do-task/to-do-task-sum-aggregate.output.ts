import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToDoTaskSumAggregate {

    @Field(() => Int, {nullable:true})
    frequenciesByRepeatType?: number;

    @Field(() => [Int], {nullable:true})
    daysOfWeek?: Array<number>;
}
