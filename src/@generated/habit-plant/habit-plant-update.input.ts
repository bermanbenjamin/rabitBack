import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HabitUpdateOneWithoutPlantNestedInput } from '../habit/habit-update-one-without-plant-nested.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumPlantEnumFieldUpdateOperationsInput } from '../prisma/enum-plant-enum-field-update-operations.input';

@InputType()
export class HabitPlantUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => HabitUpdateOneWithoutPlantNestedInput, {nullable:true})
    habit?: HabitUpdateOneWithoutPlantNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    positionBot?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    positionLeft?: IntFieldUpdateOperationsInput;

    @Field(() => EnumPlantEnumFieldUpdateOperationsInput, {nullable:true})
    plant?: EnumPlantEnumFieldUpdateOperationsInput;
}
