import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class HabitReminderScalarWhereWithAggregatesInput {

    @Field(() => [HabitReminderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitReminderScalarWhereWithAggregatesInput>;

    @Field(() => [HabitReminderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitReminderScalarWhereWithAggregatesInput>;

    @Field(() => [HabitReminderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitReminderScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    habitId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAlarm?: BoolWithAggregatesFilter;
}
