import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateplantsInput } from './user-updateplants.input';
import { HabitUncheckedUpdateManyWithoutUserNestedInput } from '../habit/habit-unchecked-update-many-without-user-nested.input';
import { ToDoListUncheckedUpdateManyWithoutUserNestedInput } from '../to-do-list/to-do-list-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutRoutinesInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userSettingsId?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateplantsInput, {nullable:true})
    plants?: UserUpdateplantsInput;

    @Field(() => HabitUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ToDoListUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    toDos?: ToDoListUncheckedUpdateManyWithoutUserNestedInput;
}
