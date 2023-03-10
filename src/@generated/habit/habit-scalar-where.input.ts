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

@InputType()
export class HabitScalarWhereInput {

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    AND?: Array<HabitScalarWhereInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    OR?: Array<HabitScalarWhereInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    NOT?: Array<HabitScalarWhereInput>;

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
}
