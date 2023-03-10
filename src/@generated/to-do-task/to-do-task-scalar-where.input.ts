import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { EnumDateTimeRepeatEnumFilter } from '../prisma/enum-date-time-repeat-enum-filter.input';

@InputType()
export class ToDoTaskScalarWhereInput {

    @Field(() => [ToDoTaskScalarWhereInput], {nullable:true})
    AND?: Array<ToDoTaskScalarWhereInput>;

    @Field(() => [ToDoTaskScalarWhereInput], {nullable:true})
    OR?: Array<ToDoTaskScalarWhereInput>;

    @Field(() => [ToDoTaskScalarWhereInput], {nullable:true})
    NOT?: Array<ToDoTaskScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    toDoListId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastDone?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    frequenciesByRepeatType?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    daysOfWeek?: IntNullableListFilter;

    @Field(() => EnumDateTimeRepeatEnumFilter, {nullable:true})
    repeatType?: EnumDateTimeRepeatEnumFilter;
}
