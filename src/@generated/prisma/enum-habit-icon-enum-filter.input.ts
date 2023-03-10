import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIconEnum } from './habit-icon.enum';
import { NestedEnumHabitIconEnumFilter } from './nested-enum-habit-icon-enum-filter.input';

@InputType()
export class EnumHabitIconEnumFilter {

    @Field(() => HabitIconEnum, {nullable:true})
    equals?: keyof typeof HabitIconEnum;

    @Field(() => [HabitIconEnum], {nullable:true})
    in?: Array<keyof typeof HabitIconEnum>;

    @Field(() => [HabitIconEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitIconEnum>;

    @Field(() => NestedEnumHabitIconEnumFilter, {nullable:true})
    not?: NestedEnumHabitIconEnumFilter;
}
