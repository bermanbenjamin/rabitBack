import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { EnumDateTimeRepeatEnumWithAggregatesFilter } from '../prisma/enum-date-time-repeat-enum-with-aggregates-filter.input';

@InputType()
export class ToDoTaskScalarWhereWithAggregatesInput {

    @Field(() => [ToDoTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ToDoTaskScalarWhereWithAggregatesInput>;

    @Field(() => [ToDoTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ToDoTaskScalarWhereWithAggregatesInput>;

    @Field(() => [ToDoTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ToDoTaskScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    toDoListId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastDone?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    frequenciesByRepeatType?: IntWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    daysOfWeek?: IntNullableListFilter;

    @Field(() => EnumDateTimeRepeatEnumWithAggregatesFilter, {nullable:true})
    repeatType?: EnumDateTimeRepeatEnumWithAggregatesFilter;
}
