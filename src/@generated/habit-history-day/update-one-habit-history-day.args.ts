import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayUpdateInput } from './habit-history-day-update.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';

@ArgsType()
export class UpdateOneHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayUpdateInput, {nullable:false})
    @Type(() => HabitHistoryDayUpdateInput)
    data!: HabitHistoryDayUpdateInput;

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:false})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    where!: HabitHistoryDayWhereUniqueInput;
}
