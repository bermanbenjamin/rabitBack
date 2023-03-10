import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHabitTimerArgs {

    @Field(() => HabitTimerWhereUniqueInput, {nullable:false})
    @Type(() => HabitTimerWhereUniqueInput)
    where!: HabitTimerWhereUniqueInput;
}
