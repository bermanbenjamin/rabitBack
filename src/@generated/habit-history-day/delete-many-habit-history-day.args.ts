import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayWhereInput } from './habit-history-day-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    @Type(() => HabitHistoryDayWhereInput)
    where?: HabitHistoryDayWhereInput;
}
