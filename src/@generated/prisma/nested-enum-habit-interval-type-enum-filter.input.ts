import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from './habit-interval-type.enum';

@InputType()
export class NestedEnumHabitIntervalTypeEnumFilter {

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    equals?: keyof typeof HabitIntervalTypeEnum;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    in?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => [HabitIntervalTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitIntervalTypeEnum>;

    @Field(() => NestedEnumHabitIntervalTypeEnumFilter, {nullable:true})
    not?: NestedEnumHabitIntervalTypeEnumFilter;
}
