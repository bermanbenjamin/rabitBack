import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerWhereInput } from './habit-timer-where.input';

@InputType()
export class HabitTimerRelationFilter {

    @Field(() => HabitTimerWhereInput, {nullable:true})
    is?: HabitTimerWhereInput;

    @Field(() => HabitTimerWhereInput, {nullable:true})
    isNot?: HabitTimerWhereInput;
}
