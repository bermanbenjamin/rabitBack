import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HabitHistoryDayUpdatesecondsPerFrequencyInput } from './habit-history-day-updateseconds-per-frequency.input';

@InputType()
export class HabitHistoryDayUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    frequencyOnThisDay?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    doneTimes?: IntFieldUpdateOperationsInput;

    @Field(() => HabitHistoryDayUpdatesecondsPerFrequencyInput, {nullable:true})
    secondsPerFrequency?: HabitHistoryDayUpdatesecondsPerFrequencyInput;
}
