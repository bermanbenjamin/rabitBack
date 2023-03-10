import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    age = "age",
    birthdate = "birthdate",
    coins = "coins",
    bestStreak = "bestStreak",
    currentStreak = "currentStreak",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isDeleted = "isDeleted",
    lastDailyReward = "lastDailyReward",
    dailyRewardCount = "dailyRewardCount",
    userSettingsId = "userSettingsId",
    plants = "plants"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
