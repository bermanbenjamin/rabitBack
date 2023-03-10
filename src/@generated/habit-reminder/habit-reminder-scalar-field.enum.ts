import { registerEnumType } from '@nestjs/graphql';

export enum HabitReminderScalarFieldEnum {
    id = "id",
    habitId = "habitId",
    date = "date",
    isAlarm = "isAlarm"
}


registerEnumType(HabitReminderScalarFieldEnum, { name: 'HabitReminderScalarFieldEnum', description: undefined })
