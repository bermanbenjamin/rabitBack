import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitColorEnum } from './habit-color.enum';

@InputType()
export class NestedEnumHabitColorEnumFilter {

    @Field(() => HabitColorEnum, {nullable:true})
    equals?: keyof typeof HabitColorEnum;

    @Field(() => [HabitColorEnum], {nullable:true})
    in?: Array<keyof typeof HabitColorEnum>;

    @Field(() => [HabitColorEnum], {nullable:true})
    notIn?: Array<keyof typeof HabitColorEnum>;

    @Field(() => NestedEnumHabitColorEnumFilter, {nullable:true})
    not?: NestedEnumHabitColorEnumFilter;
}
