import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { Type } from 'class-transformer';
import { HabitTimerCreateInput } from './habit-timer-create.input';
import { HabitTimerUpdateInput } from './habit-timer-update.input';

@ArgsType()
export class UpsertOneHabitTimerArgs {

    @Field(() => HabitTimerWhereUniqueInput, {nullable:false})
    @Type(() => HabitTimerWhereUniqueInput)
    where!: HabitTimerWhereUniqueInput;

    @Field(() => HabitTimerCreateInput, {nullable:false})
    @Type(() => HabitTimerCreateInput)
    create!: HabitTimerCreateInput;

    @Field(() => HabitTimerUpdateInput, {nullable:false})
    @Type(() => HabitTimerUpdateInput)
    update!: HabitTimerUpdateInput;
}
