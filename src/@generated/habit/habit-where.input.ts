import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumHabitColorEnumFilter } from '../prisma/enum-habit-color-enum-filter.input';
import { EnumHabitIconEnumFilter } from '../prisma/enum-habit-icon-enum-filter.input';
import { EnumHabitPeriodEnumFilter } from '../prisma/enum-habit-period-enum-filter.input';
import { HabitHistoryDayListRelationFilter } from '../habit-history-day/habit-history-day-list-relation-filter.input';
import { HabitTimerRelationFilter } from '../habit-timer/habit-timer-relation-filter.input';
import { RoutineRelationFilter } from '../routine/routine-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HabitPlantRelationFilter } from '../habit-plant/habit-plant-relation-filter.input';
import { HabitReminderListRelationFilter } from '../habit-reminder/habit-reminder-list-relation-filter.input';
import { HabitIntervalRelationFilter } from '../habit-interval/habit-interval-relation-filter.input';

@InputType()
export class HabitWhereInput {

    @Field(() => [HabitWhereInput], {nullable:true})
    AND?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    OR?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    NOT?: Array<HabitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    routineId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    frequencyPerDay?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPaused?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastPlantReward?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    habitPlantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    habitTimerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    habitIntervalId?: StringFilter;

    @Field(() => EnumHabitColorEnumFilter, {nullable:true})
    color?: EnumHabitColorEnumFilter;

    @Field(() => EnumHabitIconEnumFilter, {nullable:true})
    icon?: EnumHabitIconEnumFilter;

    @Field(() => EnumHabitPeriodEnumFilter, {nullable:true})
    period?: EnumHabitPeriodEnumFilter;

    @Field(() => HabitHistoryDayListRelationFilter, {nullable:true})
    history?: HabitHistoryDayListRelationFilter;

    @Field(() => HabitTimerRelationFilter, {nullable:true})
    timer?: HabitTimerRelationFilter;

    @Field(() => RoutineRelationFilter, {nullable:true})
    Routine?: RoutineRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => HabitPlantRelationFilter, {nullable:true})
    plant?: HabitPlantRelationFilter;

    @Field(() => HabitReminderListRelationFilter, {nullable:true})
    reminder?: HabitReminderListRelationFilter;

    @Field(() => HabitIntervalRelationFilter, {nullable:true})
    interval?: HabitIntervalRelationFilter;
}
