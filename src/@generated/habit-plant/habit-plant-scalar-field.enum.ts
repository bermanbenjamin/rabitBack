import { registerEnumType } from '@nestjs/graphql';

export enum HabitPlantScalarFieldEnum {
    id = "id",
    positionBot = "positionBot",
    positionLeft = "positionLeft",
    plant = "plant"
}


registerEnumType(HabitPlantScalarFieldEnum, { name: 'HabitPlantScalarFieldEnum', description: undefined })
