import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitColorEnum } from './habit-color.enum';
import { NestedEnumHabitColorEnumWithAggregatesFilter } from './nested-enum-habit-color-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHabitColorEnumFilter } from './nested-enum-habit-color-enum-filter.input';

@InputType()
export class EnumHabitColorEnumWithAggregatesFilter {

    @Field(() => HabitColorEnum, {nullable:true})
    equals?: keyof typeof HabitColorEnum;

    @Field(() => [HabitColorEnum], {nullable:true})
    in?: Array<keyof typeof HabitColorEnum>;

    @Field(() => [HabitColorEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitColorEnum>;

    @Field(() => NestedEnumHabitColorEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHabitColorEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHabitColorEnumFilter, {nullable:true})
    _min?: NestedEnumHabitColorEnumFilter;

    @Field(() => NestedEnumHabitColorEnumFilter, {nullable:true})
    _max?: NestedEnumHabitColorEnumFilter;
}
