import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeRepeatEnum } from './date-time-repeat.enum';

@InputType()
export class EnumDateTimeRepeatEnumFieldUpdateOperationsInput {

    @Field(() => DateTimeRepeatEnum, {nullable:true})
    set?: keyof typeof DateTimeRepeatEnum;
}
