import { registerEnumType } from '@nestjs/graphql';

export enum RoutineScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isDeleted = "isDeleted"
}


registerEnumType(RoutineScalarFieldEnum, { name: 'RoutineScalarFieldEnum', description: undefined })
