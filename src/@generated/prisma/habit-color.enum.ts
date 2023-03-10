import { registerEnumType } from '@nestjs/graphql';

export enum HabitColorEnum {
    blue = "blue",
    brown = "brown",
    green = "green",
    orange = "orange",
    cyan = "cyan",
    pink = "pink",
    purple = "purple",
    red = "red",
    yellow = "yellow"
}


registerEnumType(HabitColorEnum, { name: 'HabitColorEnum', description: undefined })
