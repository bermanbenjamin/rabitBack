import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HabitReminderMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    habitId?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isAlarm?: boolean;
}
