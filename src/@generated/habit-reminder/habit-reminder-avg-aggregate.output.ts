import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HabitReminderAvgAggregate {

    @Field(() => Float, {nullable:true})
    habitId?: number;
}
