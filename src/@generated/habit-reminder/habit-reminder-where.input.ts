import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class HabitReminderWhereInput {

    @Field(() => [HabitReminderWhereInput], {nullable:true})
    AND?: Array<HabitReminderWhereInput>;

    @Field(() => [HabitReminderWhereInput], {nullable:true})
    OR?: Array<HabitReminderWhereInput>;

    @Field(() => [HabitReminderWhereInput], {nullable:true})
    NOT?: Array<HabitReminderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    Habit?: HabitRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    habitId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAlarm?: BoolFilter;
}
