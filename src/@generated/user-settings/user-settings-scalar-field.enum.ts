import { registerEnumType } from '@nestjs/graphql';

export enum UserSettingsScalarFieldEnum {
    id = "id",
    isOnVacation = "isOnVacation",
    isWithoutAlarms = "isWithoutAlarms",
    weekStartsOn = "weekStartsOn"
}


registerEnumType(UserSettingsScalarFieldEnum, { name: 'UserSettingsScalarFieldEnum', description: undefined })
