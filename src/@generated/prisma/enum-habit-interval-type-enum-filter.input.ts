import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from './habit-interval-type.enum';
import { NestedEnumHabitIntervalTypeEnumFilter } from './nested-enum-habit-interval-type-enum-filter.input';

@InputType()
export class EnumHabitIntervalTypeEnumFilter {

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    equals?: keyof typeof HabitIntervalTypeEnum;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    in?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => NestedEnumHabitIntervalTypeEnumFilter, {nullable:true})
    not?: NestedEnumHabitIntervalTypeEnumFilter;
}
