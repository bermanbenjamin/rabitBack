import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumHabitColorEnumWithAggregatesFilter } from '../prisma/enum-habit-color-enum-with-aggregates-filter.input';
import { EnumHabitIconEnumWithAggregatesFilter } from '../prisma/enum-habit-icon-enum-with-aggregates-filter.input';
import { EnumHabitPeriodEnumWithAggregatesFilter } from '../prisma/enum-habit-period-enum-with-aggregates-filter.input';

@InputType()
export class HabitScalarWhereWithAggregatesInput {

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    routineId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    frequencyPerDay?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPaused?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    lastPlantReward?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isDeleted?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    habitPlantId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    habitTimerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    habitIntervalId?: StringWithAggregatesFilter;

    @Field(() => EnumHabitColorEnumWithAggregatesFilter, {nullable:true})
    color?: EnumHabitColorEnumWithAggregatesFilter;

    @Field(() => EnumHabitIconEnumWithAggregatesFilter, {nullable:true})
    icon?: EnumHabitIconEnumWithAggregatesFilter;

    @Field(() => EnumHabitPeriodEnumWithAggregatesFilter, {nullable:true})
    period?: EnumHabitPeriodEnumWithAggregatesFilter;
}
