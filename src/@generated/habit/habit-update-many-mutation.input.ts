import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumHabitColorEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-color-enum-field-update-operations.input';
import { EnumHabitIconEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-icon-enum-field-update-operations.input';
import { EnumHabitPeriodEnumFieldUpdateOperationsInput } from '../prisma/enum-habit-period-enum-field-update-operations.input';

@InputType()
export class HabitUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => EnumHabitColorEnumFieldUpdateOperationsInput, {nullable:true})
    color?: EnumHabitColorEnumFieldUpdateOperationsInput;

    @Field(() => EnumHabitIconEnumFieldUpdateOperationsInput, {nullable:true})
    icon?: EnumHabitIconEnumFieldUpdateOperationsInput;

    @Field(() => EnumHabitPeriodEnumFieldUpdateOperationsInput, {nullable:true})
    period?: EnumHabitPeriodEnumFieldUpdateOperationsInput;
}
