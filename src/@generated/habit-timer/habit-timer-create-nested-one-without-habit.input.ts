import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerCreateWithoutHabitInput } from './habit-timer-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitTimerCreateOrConnectWithoutHabitInput } from './habit-timer-create-or-connect-without-habit.input';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';

@InputType()
export class HabitTimerCreateNestedOneWithoutHabitInput {

    @Field(() => HabitTimerCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerCreateWithoutHabitInput)
    create?: HabitTimerCreateWithoutHabitInput;

    @Field(() => HabitTimerCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitTimerCreateOrConnectWithoutHabitInput;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:true})
    @Type(() => HabitTimerWhereUniqueInput)
    connect?: HabitTimerWhereUniqueInput;
}
