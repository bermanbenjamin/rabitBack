import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayCreateInput } from './habit-history-day-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayCreateInput, {nullable:false})
    @Type(() => HabitHistoryDayCreateInput)
    data!: HabitHistoryDayCreateInput;
}
