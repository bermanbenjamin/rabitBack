import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from './date-time-repeat.enum';

@InputType()
export class NestedEnumDateTimeRepeatEnumFilter {

    @Field(() => DateTimeRepeatEnum, {nullable:true})
    equals?: keyof typeof DateTimeRepeatEnum;

    @Field(() => [DateTimeRepeatEnum], {nullable:true})
    in?: Array<keyof typeof DateTimeRepeatEnum>;

    @Field(() => [DateTimeRepeatEnum], {nullable:true})
    notIn?: Array<keyof typeof DateTimeRepeatEnum>;

    @Field(() => NestedEnumDateTimeRepeatEnumFilter, {nullable:true})
    not?: NestedEnumDateTimeRepeatEnumFilter;
}
