import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPeriodEnum } from './habit-period.enum';

@InputType()
export class NestedEnumHabitPeriodEnumFilter {

    @Field(() => HabitPeriodEnum, {nullable:true})
    equals?: keyof typeof HabitPeriodEnum;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    in?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => [HabitPeriodEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitPeriodEnum>;

    @Field(() => NestedEnumHabitPeriodEnumFilter, {nullable:true})
    not?: NestedEnumHabitPeriodEnumFilter;
}
