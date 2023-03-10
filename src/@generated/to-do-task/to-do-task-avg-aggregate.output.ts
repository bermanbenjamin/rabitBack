import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ToDoTaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    frequenciesByRepeatType?: number;

    @Field(() => Float, {nullable:true})
    daysOfWeek?: number;
}
