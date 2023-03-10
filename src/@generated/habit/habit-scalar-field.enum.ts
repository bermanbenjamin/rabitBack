import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
    id = "id",
    routineId = "routineId",
    userId = "userId",
    frequencyPerDay = "frequencyPerDay",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    isPaused = "isPaused",
    lastPlantReward = "lastPlantReward",
    isDeleted = "isDeleted",
    habitPlantId = "habitPlantId",
    habitTimerId = "habitTimerId",
    habitIntervalId = "habitIntervalId",
    color = "color",
    icon = "icon",
    period = "period"
}


registerEnumType(HabitScalarFieldEnum, { name: 'HabitScalarFieldEnum', description: undefined })
