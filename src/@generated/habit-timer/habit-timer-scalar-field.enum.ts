import { registerEnumType } from '@nestjs/graphql';

export enum HabitTimerScalarFieldEnum {
    id = "id",
    isActive = "isActive",
    time = "time"
}


registerEnumType(HabitTimerScalarFieldEnum, { name: 'HabitTimerScalarFieldEnum', description: undefined })
