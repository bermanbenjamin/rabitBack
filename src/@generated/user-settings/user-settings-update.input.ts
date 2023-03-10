import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneWithoutUserSettingsNestedInput } from '../user/user-update-one-without-user-settings-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class UserSettingsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutUserSettingsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutUserSettingsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isOnVacation?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isWithoutAlarms?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    weekStartsOn?: IntFieldUpdateOperationsInput;
}
