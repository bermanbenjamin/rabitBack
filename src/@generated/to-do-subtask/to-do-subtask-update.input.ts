import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ToDoTaskUpdateOneRequiredWithoutSubTasksNestedInput } from '../to-do-task/to-do-task-update-one-required-without-sub-tasks-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class ToDoSubtaskUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ToDoTaskUpdateOneRequiredWithoutSubTasksNestedInput, {nullable:true})
    toDoTask?: ToDoTaskUpdateOneRequiredWithoutSubTasksNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDone?: BoolFieldUpdateOperationsInput;
}
