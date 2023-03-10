import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HabitUncheckedUpdateOneWithoutIntervalNestedInput } from '../habit/habit-unchecked-update-one-without-interval-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HabitIntervalUpdatedaysOfWeekInput } from './habit-interval-updatedays-of-week.input';
import { EnumHabitIntervalTypeEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-interval-type-enum-field-update-operations.input';

@InputType()
export class HabitIntervalUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => HabitUncheckedUpdateOneWithoutIntervalNestedInput, {nullable:true})
    Habit?: HabitUncheckedUpdateOneWithoutIntervalNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    timesPerWeek?: IntFieldUpdateOperationsInput;

    @Field(() => HabitIntervalUpdatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: HabitIntervalUpdatedaysOfWeekInput;

    @Field(() => EnumHabitIntervalTypeEnumFieldUpdateOperationsInput, {nullable:true})
    type?: EnumHabitIntervalTypeEnumFieldUpdateOperationsInput;
}
