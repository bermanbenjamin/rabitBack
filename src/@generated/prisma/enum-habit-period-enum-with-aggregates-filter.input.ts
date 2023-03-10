import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPeriodEnum } from './habit-period.enum';
import { NestedEnumHabitPeriodEnumWithAggregatesFilter } from './nested-enum-habit-period-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHabitPeriodEnumFilter } from './nested-enum-habit-period-enum-filter.input';

@InputType()
export class EnumHabitPeriodEnumWithAggregatesFilter {

    @Field(() => HabitPeriodEnum, {nullable:true})
    equals?: keyof typeof HabitPeriodEnum;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    in?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => NestedEnumHabitPeriodEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHabitPeriodEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHabitPeriodEnumFilter, {nullable:true})
    _min?: NestedEnumHabitPeriodEnumFilter;

    @Field(() => NestedEnumHabitPeriodEnumFilter, {nullable:true})
    _max?: NestedEnumHabitPeriodEnumFilter;
}
