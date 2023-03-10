import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPeriodEnum } from './habit-period.enum';
import { NestedEnumHabitPeriodEnumFilter } from './nested-enum-habit-period-enum-filter.input';

@InputType()
export class EnumHabitPeriodEnumFilter {

    @Field(() => HabitPeriodEnum, {nullable:true})
    equals?: keyof typeof HabitPeriodEnum;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    in?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => NestedEnumHabitPeriodEnumFilter, {nullable:true})
    not?: NestedEnumHabitPeriodEnumFilter;
}
