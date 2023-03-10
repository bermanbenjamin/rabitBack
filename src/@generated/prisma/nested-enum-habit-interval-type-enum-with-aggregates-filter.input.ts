import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from './habit-interval-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumHabitIntervalTypeEnumFilter } from './nested-enum-habit-interval-type-enum-filter.input';

@InputType()
export class NestedEnumHabitIntervalTypeEnumWithAggregatesFilter {

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    equals?: keyof typeof HabitIntervalTypeEnum;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    in?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => NestedEnumHabitIntervalTypeEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumHabitIntervalTypeEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumHabitIntervalTypeEnumFilter, {nullable:true})
    _min?: NestedEnumHabitIntervalTypeEnumFilter;

    @Field(() => NestedEnumHabitIntervalTypeEnumFilter, {nullable:true})
    _max?: NestedEnumHabitIntervalTypeEnumFilter;
}
