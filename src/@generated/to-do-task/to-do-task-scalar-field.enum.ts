import { registerEnumType } from '@nestjs/graphql';

export enum ToDoTaskScalarFieldEnum {
    id = "id",
    toDoListId = "toDoListId",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    lastDone = "lastDone",
    date = "date",
    frequenciesByRepeatType = "frequenciesByRepeatType",
    daysOfWeek = "daysOfWeek",
    repeatType = "repeatType"
}


registerEnumType(ToDoTaskScalarFieldEnum, { name: 'ToDoTaskScalarFieldEnum', description: undefined })
