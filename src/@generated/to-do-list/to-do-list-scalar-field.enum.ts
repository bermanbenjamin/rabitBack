import { registerEnumType } from '@nestjs/graphql';

export enum ToDoListScalarFieldEnum {
    id = "id",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isDeleted = "isDeleted",
    userId = "userId"
}


registerEnumType(ToDoListScalarFieldEnum, { name: 'ToDoListScalarFieldEnum', description: undefined })
