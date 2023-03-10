import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HabitUncheckedUpdateOneWithoutPlantNestedInput } from '../habit/habit-unchecked-update-one-without-plant-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumPlantEnumFieldUpdateOperationsInput } from '../prisma/enum-plant-enum-field-update-operations.input';

@InputType()
export class HabitPlantUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => HabitUncheckedUpdateOneWithoutPlantNestedInput, {nullable:true})
    habit?: HabitUncheckedUpdateOneWithoutPlantNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    positionBot?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    positionLeft?: IntFieldUpdateOperationsInput;

    @Field(() => EnumPlantEnumFieldUpdateOperationsInput, {nullable:true})
    plant?: EnumPlantEnumFieldUpdateOperationsInput;
}
