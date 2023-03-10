import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPeriodEnum } from './habit-period.enum';

@InputType()
export class EnumHabitPeriodEnumFieldUpdateOperationsInput {

    @Field(() => HabitPeriodEnum, {nullable:true})
    set?: keyof typeof HabitPeriodEnum;
}
