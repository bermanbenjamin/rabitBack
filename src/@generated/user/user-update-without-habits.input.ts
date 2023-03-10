import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateplantsInput } from './user-updateplants.input';
import { UserSettingsUpdateOneRequiredWithoutUserNestedInput } from '../user-settings/user-settings-update-one-required-without-user-nested.input';
import { RoutineUpdateManyWithoutUserNestedInput } from '../routine/routine-update-many-without-user-nested.input';
import { ToDoListUpdateManyWithoutUserNestedInput } from '../to-do-list/to-do-list-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutHabitsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    age?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    birthdate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    coins?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    bestStreak?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    currentStreak?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    lastDailyReward?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dailyRewardCount?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateplantsInput, {nullable:true})
    plants?: UserUpdateplantsInput;

    @Field(() => UserSettingsUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    userSettings?: UserSettingsUpdateOneRequiredWithoutUserNestedInput;

    @Field(() => RoutineUpdateManyWithoutUserNestedInput, {nullable:true})
    routines?: RoutineUpdateManyWithoutUserNestedInput;

    @Field(() => ToDoListUpdateManyWithoutUserNestedInput, {nullable:true})
    toDos?: ToDoListUpdateManyWithoutUserNestedInput;
}
