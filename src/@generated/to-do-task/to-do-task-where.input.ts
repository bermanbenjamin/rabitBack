import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { EnumDateTimeRepeatEnumFilter } from '../prisma/enum-date-time-repeat-enum-filter.input';
import { ToDoSubtaskListRelationFilter } from '../to-do-subtask/to-do-subtask-list-relation-filter.input';
import { ToDoListRelationFilter } from '../to-do-list/to-do-list-relation-filter.input';

@InputType()
export class ToDoTaskWhereInput {

    @Field(() => [ToDoTaskWhereInput], {nullable:true})
    AND?: Array<ToDoTaskWhereInput>;

    @Field(() => [ToDoTaskWhereInput], {nullable:true})
    OR?: Array<ToDoTaskWhereInput>;

    @Field(() => [ToDoTaskWhereInput], {nullable:true})
    NOT?: Array<ToDoTaskWhereInput>;

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

    @Field(() => ToDoSubtaskListRelationFilter, {nullable:true})
    subTasks?: ToDoSubtaskListRelationFilter;

    @Field(() => ToDoListRelationFilter, {nullable:true})
    toDoList?: ToDoListRelationFilter;
}
