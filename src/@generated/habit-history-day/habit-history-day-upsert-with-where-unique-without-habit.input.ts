import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayUpdateWithoutHabitInput } from './habit-history-day-update-without-habit.input';
import { HabitHistoryDayCreateWithoutHabitInput } from './habit-history-day-create-without-habit.input';

@InputType()
export class HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput {

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:false})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    where!: HabitHistoryDayWhereUniqueInput;

    @Field(() => HabitHistoryDayUpdateWithoutHabitInput, {nullable:false})
    @Type(() => HabitHistoryDayUpdateWithoutHabitInput)
    update!: HabitHistoryDayUpdateWithoutHabitInput;

    @Field(() => HabitHistoryDayCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitHistoryDayCreateWithoutHabitInput)
    create!: HabitHistoryDayCreateWithoutHabitInput;
}
