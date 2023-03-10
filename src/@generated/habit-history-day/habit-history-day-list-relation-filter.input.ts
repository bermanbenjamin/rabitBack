import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayWhereInput } from './habit-history-day-where.input';

@InputType()
export class HabitHistoryDayListRelationFilter {

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    every?: HabitHistoryDayWhereInput;

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    some?: HabitHistoryDayWhereInput;

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    none?: HabitHistoryDayWhereInput;
}
