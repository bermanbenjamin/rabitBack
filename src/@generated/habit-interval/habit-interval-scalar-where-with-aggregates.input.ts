import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { EnumHabitIntervalTypeEnumWithAggregatesFilter } from '../prisma/enum-habit-interval-type-enum-with-aggregates-filter.input';

@InputType()
export class HabitIntervalScalarWhereWithAggregatesInput {

    @Field(() => [HabitIntervalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitIntervalScalarWhereWithAggregatesInput>;

    @Field(() => [HabitIntervalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitIntervalScalarWhereWithAggregatesInput>;

    @Field(() => [HabitIntervalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitIntervalScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    timesPerWeek?: IntWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    daysOfWeek?: IntNullableListFilter;

    @Field(() => EnumHabitIntervalTypeEnumWithAggregatesFilter, {nullable:true})
    type?: EnumHabitIntervalTypeEnumWithAggregatesFilter;
}
