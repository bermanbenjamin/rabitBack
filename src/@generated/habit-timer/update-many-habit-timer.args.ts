import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerUpdateManyMutationInput } from './habit-timer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitTimerWhereInput } from './habit-timer-where.input';

@ArgsType()
export class UpdateManyHabitTimerArgs {

    @Field(() => HabitTimerUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitTimerUpdateManyMutationInput)
    data!: HabitTimerUpdateManyMutationInput;

    @Field(() => HabitTimerWhereInput, {nullable:true})
    @Type(() => HabitTimerWhereInput)
    where?: HabitTimerWhereInput;
}
