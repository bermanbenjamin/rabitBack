import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ToDoTaskUpdatedaysOfWeekInput } from './to-do-task-updatedays-of-week.input';
import { EnumDateTimeRepeatEnumFieldUpdateOperationsInput } from '../prisma/enum-date-time-repeat-enum-field-update-operations.input';
import { ToDoSubtaskUpdateManyWithoutToDoTaskNestedInput } from '../to-do-subtask/to-do-subtask-update-many-without-to-do-task-nested.input';

@InputType()
export class ToDoTaskUpdateWithoutToDoListInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastDone?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    frequenciesByRepeatType?: IntFieldUpdateOperationsInput;

    @Field(() => ToDoTaskUpdatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: ToDoTaskUpdatedaysOfWeekInput;

    @Field(() => EnumDateTimeRepeatEnumFieldUpdateOperationsInput, {nullable:true})
    repeatType?: EnumDateTimeRepeatEnumFieldUpdateOperationsInput;

    @Field(() => ToDoSubtaskUpdateManyWithoutToDoTaskNestedInput, {nullable:true})
    subTasks?: ToDoSubtaskUpdateManyWithoutToDoTaskNestedInput;
}
