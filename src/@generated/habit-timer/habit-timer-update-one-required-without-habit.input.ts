import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitTimerCreateWithoutHabitInput } from './habit-timer-create-without-habit.input';
import { HabitTimerCreateOrConnectWithoutHabitInput } from './habit-timer-create-or-connect-without-habit.input';
import { HabitTimerUpsertWithoutHabitInput } from './habit-timer-upsert-without-habit.input';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { HabitTimerUpdateWithoutHabitInput } from './habit-timer-update-without-habit.input';

@InputType()
export class HabitTimerUpdateOneRequiredWithoutHabitInput {

    @Field(() => HabitTimerCreateWithoutHabitInput, {nullable:true})
    create?: HabitTimerCreateWithoutHabitInput;

    @Field(() => HabitTimerCreateOrConnectWithoutHabitInput, {nullable:true})
    connectOrCreate?: HabitTimerCreateOrConnectWithoutHabitInput;

    @Field(() => HabitTimerUpsertWithoutHabitInput, {nullable:true})
    upsert?: HabitTimerUpsertWithoutHabitInput;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:true})
    connect?: HabitTimerWhereUniqueInput;

    @Field(() => HabitTimerUpdateWithoutHabitInput, {nullable:true})
    update?: HabitTimerUpdateWithoutHabitInput;
}
