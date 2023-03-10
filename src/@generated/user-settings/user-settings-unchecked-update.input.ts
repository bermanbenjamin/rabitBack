import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUncheckedUpdateOneWithoutUserSettingsNestedInput } from '../user/user-unchecked-update-one-without-user-settings-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class UserSettingsUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateOneWithoutUserSettingsNestedInput, {nullable:true})
    user?: UserUncheckedUpdateOneWithoutUserSettingsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isOnVacation?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isWithoutAlarms?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    weekStartsOn?: IntFieldUpdateOperationsInput;
}
