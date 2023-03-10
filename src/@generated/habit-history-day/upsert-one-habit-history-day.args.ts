import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayCreateInput } from './habit-history-day-create.input';
import { HabitHistoryDayUpdateInput } from './habit-history-day-update.input';

@ArgsType()
export class UpsertOneHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:false})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    where!: HabitHistoryDayWhereUniqueInput;

    @Field(() => HabitHistoryDayCreateInput, {nullable:false})
    @Type(() => HabitHistoryDayCreateInput)
    create!: HabitHistoryDayCreateInput;

    @Field(() => HabitHistoryDayUpdateInput, {nullable:false})
    @Type(() => HabitHistoryDayUpdateInput)
    update!: HabitHistoryDayUpdateInput;
}
