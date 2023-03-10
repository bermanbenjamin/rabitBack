import { registerEnumType } from '@nestjs/graphql';

export enum HabitPeriodEnum {
    anyTime = "anyTime",
    morning = "morning",
    evening = "evening",
    night = "night"
}


registerEnumType(HabitPeriodEnum, { name: 'HabitPeriodEnum', description: undefined })
