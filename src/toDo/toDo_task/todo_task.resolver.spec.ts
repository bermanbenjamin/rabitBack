import { Test, TestingModule } from '@nestjs/testing';
import { DateTimeRepeatEnum, ToDoTask } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { StringFieldUpdateOperationsInput } from '../../@generated/prisma/string-field-update-operations.input';
import { ToDoListCreateNestedOneWithoutTasksInput } from '../../@generated/to-do-list/to-do-list-create-nested-one-without-tasks.input';
import { ToDoTaskCreateInput } from '../../@generated/to-do-task/to-do-task-create.input';
import { ToDoTaskUpdateInput } from '../../@generated/to-do-task/to-do-task-update.input';
import { ToDoTaskResolver } from './todo_task.resolver';
import { ToDoTaskService } from './todo_task.service';

const todoTask: ToDoTask = {
  id: '1',
  createdAt: new Date(),
  title: 'test',
  updatedAt: new Date(),
  date: new Date(),
  daysOfWeek: [1, 2, 3],
  frequenciesByRepeatType: 3,
  lastDone: new Date(),
  repeatType: DateTimeRepeatEnum.day,
  toDoListId: '1',
};

const toDoTaskCreateInput: ToDoTaskCreateInput = {
  title: 'test',
  date: new Date(),
  toDoList: new ToDoListCreateNestedOneWithoutTasksInput(),
};

const toDoTaskUpdateInput: ToDoTaskUpdateInput = {
  title: new StringFieldUpdateOperationsInput(),
};

describe('ToDoTaskResolver', () => {
  let resolver: ToDoTaskResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToDoTaskResolver,
        {
          provide: ToDoTaskService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(todoTask),
            findByToDoListId: jest.fn().mockResolvedValue(todoTask),
            create: jest.fn().mockResolvedValue(todoTask),
            update: jest.fn().mockResolvedValue(todoTask),
            delete: jest.fn().mockResolvedValue(todoTask),
          },
        },
      ],
    }).compile();

    resolver = module.get<ToDoTaskResolver>(ToDoTaskResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get todo task by id', async () => {
    const info: GraphQLResolveInfo = {} as GraphQLResolveInfo;
    const id = '1';
    const response = await resolver.getToDoTask(id, info);
    expect(response).toEqual(todoTask);
  });

  it('should create a todoTask', async () => {
    const info = {} as GraphQLResolveInfo;
    const result = await resolver.createToDoTask(toDoTaskCreateInput, info);

    expect(result).toEqual(todoTask);
  });

  it('should update a todoTask', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.updateToDoTask(id, toDoTaskUpdateInput, info);

    expect(result).toEqual(todoTask);
  });

  it('should delete a todoTask', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.deleteToDoTask(id, info);

    expect(result).toEqual(todoTask);
  });
});
