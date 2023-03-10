import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ToDoListRepository } from './toDo_list/todo_list.repository';
import { ToDoListResolver } from './toDo_list/todo_list.resolver';
import { ToDoListService } from './toDo_list/todo_list.service';
import { ToDoTaskRepository } from './toDo_task/todo_task.repository';
import { ToDoTaskResolver } from './toDo_task/todo_task.resolver';
import { ToDoTaskService } from './toDo_task/todo_task.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    ToDoListService,
    ToDoTaskService,
    ToDoListResolver,
    ToDoTaskResolver,
    ToDoListRepository,
    ToDoTaskRepository,
  ],
  exports: [ToDoListService, ToDoTaskService],
})
export class ToDoModule {}
