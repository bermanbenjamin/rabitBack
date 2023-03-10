import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from './habit-interval-type.enum';

@InputType()
export class EnumHabitIntervalTypeEnumFieldUpdateOperationsInput {

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    set?: keyof typeof HabitIntervalTypeEnum;
}
