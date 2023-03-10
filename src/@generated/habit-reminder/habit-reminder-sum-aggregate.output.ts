import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitReminderSumAggregate {

    @Field(() => Int, {nullable:true})
    habitId?: number;
}
