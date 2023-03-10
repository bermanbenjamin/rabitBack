import { Test, TestingModule } from '@nestjs/testing';
import { ToDoList } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { ToDoListCreateInput } from '../../@generated/to-do-list/to-do-list-create.input';
import { ToDoListUpdateInput } from '../../@generated/to-do-list/to-do-list-update.input';
import { ToDoListResolver } from './todo_list.resolver';
import { ToDoListService } from './todo_list.service';

const todoList: ToDoList = {
  id: '1',
  createdAt: new Date(),
  title: 'test',
  updatedAt: new Date(),
  isDeleted: false,
  userId: '1',
};

describe('ToDoListResolver', () => {
  let resolver: ToDoListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToDoListResolver,
        {
          provide: ToDoListService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(todoList),
            findByUserId: jest.fn().mockResolvedValue(todoList),
            create: jest.fn().mockResolvedValue(todoList),
            update: jest.fn().mockResolvedValue(todoList),
            delete: jest.fn().mockResolvedValue(todoList),
          },
        },
      ],
    }).compile();

    resolver = module.get<ToDoListResolver>(ToDoListResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get todo list by id', async () => {
    const info: GraphQLResolveInfo = {} as GraphQLResolveInfo;
    const id = '1';
    const response = await resolver.getToDoList(id, info);
    expect(response).toEqual(todoList);
  });

  it('should get all not deleted todo lists', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getAllNotDeletedTodoListByUserId(id, info);
    expect(result).toEqual(todoList);
  });

  it('should create a todoList', async () => {
    const info = {} as GraphQLResolveInfo;
    const result = await resolver.createToDoList(
      todoList as ToDoListCreateInput,
      info,
    );

    expect(result).toEqual(todoList);
  });

  it('should update a todoList', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.updateToDoList(
      id,
      todoList as ToDoListUpdateInput,
      info,
    );

    expect(result).toEqual(todoList);
  });

  it('should delete a todoList', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.deleteToDoList(id, info);

    expect(result).toEqual(todoList);
  });
});
