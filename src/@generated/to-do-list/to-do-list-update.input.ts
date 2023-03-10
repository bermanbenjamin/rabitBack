import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ToDoTaskUpdateManyWithoutToDoListNestedInput } from '../to-do-task/to-do-task-update-many-without-to-do-list-nested.input';
import { UserUpdateOneWithoutToDosNestedInput } from '../user/user-update-one-without-to-dos-nested.input';

@InputType()
export class ToDoListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: BoolFieldUpdateOperationsInput;

    @Field(() => ToDoTaskUpdateManyWithoutToDoListNestedInput, {nullable:true})
    tasks?: ToDoTaskUpdateManyWithoutToDoListNestedInput;

    @Field(() => UserUpdateOneWithoutToDosNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutToDosNestedInput;
}
