import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerCreateInput } from './habit-timer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitTimerArgs {

    @Field(() => HabitTimerCreateInput, {nullable:false})
    @Type(() => HabitTimerCreateInput)
    data!: HabitTimerCreateInput;
}
