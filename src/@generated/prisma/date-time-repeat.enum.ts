import { registerEnumType } from '@nestjs/graphql';

export enum DateTimeRepeatEnum {
    never = "never",
    day = "day",
    week = "week",
    month = "month"
}


registerEnumType(DateTimeRepeatEnum, { name: 'DateTimeRepeatEnum', description: undefined })
