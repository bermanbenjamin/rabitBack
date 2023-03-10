import { registerEnumType } from '@nestjs/graphql';

export enum HabitHistoryDayScalarFieldEnum {
    id = "id",
    habitId = "habitId",
    date = "date",
    frequencyOnThisDay = "frequencyOnThisDay",
    doneTimes = "doneTimes",
    secondsPerFrequency = "secondsPerFrequency"
}


registerEnumType(HabitHistoryDayScalarFieldEnum, { name: 'HabitHistoryDayScalarFieldEnum', description: undefined })
