import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class HabitHistoryDayScalarWhereWithAggregatesInput {

    @Field(() => [HabitHistoryDayScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitHistoryDayScalarWhereWithAggregatesInput>;

    @Field(() => [HabitHistoryDayScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitHistoryDayScalarWhereWithAggregatesInput>;

    @Field(() => [HabitHistoryDayScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitHistoryDayScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    habitId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    frequencyOnThisDay?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    doneTimes?: IntWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    secondsPerFrequency?: IntNullableListFilter;
}
