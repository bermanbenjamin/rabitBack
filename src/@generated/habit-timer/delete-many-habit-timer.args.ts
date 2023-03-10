import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereInput } from './habit-timer-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitTimerArgs {

    @Field(() => HabitTimerWhereInput, {nullable:true})
    @Type(() => HabitTimerWhereInput)
    where?: HabitTimerWhereInput;
}
