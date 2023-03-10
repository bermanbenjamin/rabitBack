import { registerEnumType } from '@nestjs/graphql';

export enum HabitIntervalScalarFieldEnum {
    id = "id",
    timesPerWeek = "timesPerWeek",
    daysOfWeek = "daysOfWeek",
    type = "type"
}


registerEnumType(HabitIntervalScalarFieldEnum, { name: 'HabitIntervalScalarFieldEnum', description: undefined })
