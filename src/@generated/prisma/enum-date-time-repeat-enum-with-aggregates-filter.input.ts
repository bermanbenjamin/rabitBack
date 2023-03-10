import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from './date-time-repeat.enum';
import { NestedEnumDateTimeRepeatEnumWithAggregatesFilter } from './nested-enum-date-time-repeat-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDateTimeRepeatEnumFilter } from './nested-enum-date-time-repeat-enum-filter.input';

@InputType()
export class EnumDateTimeRepeatEnumWithAggregatesFilter {

    @Field(() => DateTimeRepeatEnum, {nullable:true})
    equals?: keyof typeof DateTimeRepeatEnum;

    @Field(() => [DateTimeRepeatEnum], {nullable:true})
    in?: Array<keyof typeof DateTimeRepeatEnum>;

    @Field(() => [DateTimeRepeatEnum], {nullable:true})
    notIn?: Array<keyof typeof DateTimeRepeatEnum>;

    @Field(() => NestedEnumDateTimeRepeatEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDateTimeRepeatEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDateTimeRepeatEnumFilter, {nullable:true})
    _min?: NestedEnumDateTimeRepeatEnumFilter;

    @Field(() => NestedEnumDateTimeRepeatEnumFilter, {nullable:true})
    _max?: NestedEnumDateTimeRepeatEnumFilter;
}
