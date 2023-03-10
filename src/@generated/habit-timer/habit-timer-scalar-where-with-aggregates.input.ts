import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HabitTimerScalarWhereWithAggregatesInput {

    @Field(() => [HabitTimerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitTimerScalarWhereWithAggregatesInput>;

    @Field(() => [HabitTimerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitTimerScalarWhereWithAggregatesInput>;

    @Field(() => [HabitTimerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitTimerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    time?: DateTimeWithAggregatesFilter;
}
