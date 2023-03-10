import { registerEnumType } from '@nestjs/graphql';

export enum HabitIntervalTypeEnum {
    everyOtherDay = "everyOtherDay",
    daily = "daily",
    weekly = "weekly"
}


registerEnumType(HabitIntervalTypeEnum, { name: 'HabitIntervalTypeEnum', description: undefined })
