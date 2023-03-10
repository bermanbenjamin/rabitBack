import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class HabitHistoryDayWhereInput {

    @Field(() => [HabitHistoryDayWhereInput], {nullable:true})
    AND?: Array<HabitHistoryDayWhereInput>;

    @Field(() => [HabitHistoryDayWhereInput], {nullable:true})
    OR?: Array<HabitHistoryDayWhereInput>;

    @Field(() => [HabitHistoryDayWhereInput], {nullable:true})
    NOT?: Array<HabitHistoryDayWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    Habit?: HabitRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    habitId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    frequencyOnThisDay?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    doneTimes?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    secondsPerFrequency?: IntNullableListFilter;
}
