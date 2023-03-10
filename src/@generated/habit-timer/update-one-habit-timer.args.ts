import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerUpdateInput } from './habit-timer-update.input';
import { Type } from 'class-transformer';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';

@ArgsType()
export class UpdateOneHabitTimerArgs {

    @Field(() => HabitTimerUpdateInput, {nullable:false})
    @Type(() => HabitTimerUpdateInput)
    data!: HabitTimerUpdateInput;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:false})
    @Type(() => HabitTimerWhereUniqueInput)
    where!: HabitTimerWhereUniqueInput;
}
