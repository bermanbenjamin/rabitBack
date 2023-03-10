import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerCreateWithoutHabitInput } from './habit-timer-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitTimerCreateOrConnectWithoutHabitInput } from './habit-timer-create-or-connect-without-habit.input';
import { HabitTimerUpsertWithoutHabitInput } from './habit-timer-upsert-without-habit.input';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { HabitTimerUpdateWithoutHabitInput } from './habit-timer-update-without-habit.input';

@InputType()
export class HabitTimerUpdateOneRequiredWithoutHabitNestedInput {

    @Field(() => HabitTimerCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerCreateWithoutHabitInput)
    create?: HabitTimerCreateWithoutHabitInput;

    @Field(() => HabitTimerCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitTimerCreateOrConnectWithoutHabitInput;

    @Field(() => HabitTimerUpsertWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerUpsertWithoutHabitInput)
    upsert?: HabitTimerUpsertWithoutHabitInput;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:true})
    @Type(() => HabitTimerWhereUniqueInput)
    connect?: HabitTimerWhereUniqueInput;

    @Field(() => HabitTimerUpdateWithoutHabitInput, {nullable:true})
    @Type(() => HabitTimerUpdateWithoutHabitInput)
    update?: HabitTimerUpdateWithoutHabitInput;
}
