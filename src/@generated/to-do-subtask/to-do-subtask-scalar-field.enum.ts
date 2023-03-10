import { registerEnumType } from '@nestjs/graphql';

export enum ToDoSubtaskScalarFieldEnum {
    id = "id",
    toDoTaskId = "toDoTaskId",
    title = "title",
    isDone = "isDone"
}


registerEnumType(ToDoSubtaskScalarFieldEnum, { name: 'ToDoSubtaskScalarFieldEnum', description: undefined })
