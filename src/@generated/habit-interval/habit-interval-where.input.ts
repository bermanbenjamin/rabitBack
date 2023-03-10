import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { EnumHabitIntervalTypeEnumFilter } from '../prisma/enum-habit-interval-type-enum-filter.input';

@InputType()
export class HabitIntervalWhereInput {

    @Field(() => [HabitIntervalWhereInput], {nullable:true})
    AND?: Array<HabitIntervalWhereInput>;

    @Field(() => [HabitIntervalWhereInput], {nullable:true})
    OR?: Array<HabitIntervalWhereInput>;

    @Field(() => [HabitIntervalWhereInput], {nullable:true})
    NOT?: Array<HabitIntervalWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    Habit?: HabitRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    timesPerWeek?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    daysOfWeek?: IntNullableListFilter;

    @Field(() => EnumHabitIntervalTypeEnumFilter, {nullable:true})
    type?: EnumHabitIntervalTypeEnumFilter;
}
