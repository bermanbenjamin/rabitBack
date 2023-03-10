import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { Type } from 'class-transformer';
import { HabitTimerCreateWithoutHabitInput } from './habit-timer-create-without-habit.input';

@InputType()
export class HabitTimerCreateOrConnectWithoutHabitInput {

    @Field(() => HabitTimerWhereUniqueInput, {nullable:false})
    @Type(() => HabitTimerWhereUniqueInput)
    where!: HabitTimerWhereUniqueInput;

    @Field(() => HabitTimerCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitTimerCreateWithoutHabitInput)
    create!: HabitTimerCreateWithoutHabitInput;
}
