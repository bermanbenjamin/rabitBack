import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIconEnum } from './habit-icon.enum';
import { NestedEnumHabitIconEnumWithAggregatesFilter } from './nested-enum-habit-icon-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHabitIconEnumFilter } from './nested-enum-habit-icon-enum-filter.input';

@InputType()
export class EnumHabitIconEnumWithAggregatesFilter {

    @Field(() => HabitIconEnum, {nullable:true})
    equals?: keyof typeof HabitIconEnum;

    @Field(() => [HabitIconEnum], {nullable:true})
    in?: Array<keyof typeof HabitIconEnum>;

    @Field(() => [HabitIconEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitIconEnum>;

    @Field(() => NestedEnumHabitIconEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHabitIconEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHabitIconEnumFilter, {nullable:true})
    _min?: NestedEnumHabitIconEnumFilter;

    @Field(() => NestedEnumHabitIconEnumFilter, {nullable:true})
    _max?: NestedEnumHabitIconEnumFilter;
}
