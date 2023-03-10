import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayCreateWithoutHabitInput } from './habit-history-day-create-without-habit.input';

@InputType()
export class HabitHistoryDayCreateOrConnectWithoutHabitInput {

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:false})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    where!: HabitHistoryDayWhereUniqueInput;

    @Field(() => HabitHistoryDayCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitHistoryDayCreateWithoutHabitInput)
    create!: HabitHistoryDayCreateWithoutHabitInput;
}
