import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HabitUpdateOneWithoutIntervalNestedInput } from '../habit/habit-update-one-without-interval-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HabitIntervalUpdatedaysOfWeekInput } from './habit-interval-updatedays-of-week.input';
import { EnumHabitIntervalTypeEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-interval-type-enum-field-update-operations.input';

@InputType()
export class HabitIntervalUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => HabitUpdateOneWithoutIntervalNestedInput, {nullable:true})
    Habit?: HabitUpdateOneWithoutIntervalNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    timesPerWeek?: IntFieldUpdateOperationsInput;

    @Field(() => HabitIntervalUpdatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: HabitIntervalUpdatedaysOfWeekInput;

    @Field(() => EnumHabitIntervalTypeEnumFieldUpdateOperationsInput, {nullable:true})
    type?: EnumHabitIntervalTypeEnumFieldUpdateOperationsInput;
}
