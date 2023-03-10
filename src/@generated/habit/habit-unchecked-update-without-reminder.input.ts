import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumHabitColorEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-color-enum-field-update-operations.input';
import { EnumHabitIconEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-icon-enum-field-update-operations.input';
import { EnumHabitPeriodEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-period-enum-field-update-operations.input';
import { HabitHistoryDayUncheckedUpdateManyWithoutHabitNestedInput } from '../habit-history-day/habit-history-day-unchecked-update-many-without-habit-nested.input';

@InputType()
export class HabitUncheckedUpdateWithoutReminderInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    routineId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    frequencyPerDay?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPaused?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    lastPlantReward?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    habitPlantId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    habitTimerId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    habitIntervalId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumHabitColorEnumFieldUpdateOperationsInput, {nullable:true})
    color?: EnumHabitColorEnumFieldUpdateOperationsInput;

    @Field(() => EnumHabitIconEnumFieldUpdateOperationsInput, {nullable:true})
    icon?: EnumHabitIconEnumFieldUpdateOperationsInput;

    @Field(() => EnumHabitPeriodEnumFieldUpdateOperationsInput, {nullable:true})
    period?: EnumHabitPeriodEnumFieldUpdateOperationsInput;

    @Field(() => HabitHistoryDayUncheckedUpdateManyWithoutHabitNestedInput, {nullable:true})
    history?: HabitHistoryDayUncheckedUpdateManyWithoutHabitNestedInput;
}
