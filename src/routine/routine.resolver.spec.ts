import { Test, TestingModule } from '@nestjs/testing';
import { Routine } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { RoutineCreateInput } from '../@generated/routine/routine-create.input';
import { RoutineUpdateInput } from '../@generated/routine/routine-update.input';
import { RoutineResolver } from './routine.resolver';
import { RoutineService } from './routine.service';

const routine: Routine = {
  id: '1',
  title: 'test',
  userId: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false,
};

describe('RoutineResolver', () => {
  let resolver: RoutineResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoutineResolver,
        {
          provide: RoutineService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(routine),
            findByUserId: jest.fn().mockResolvedValue(routine),
            create: jest.fn().mockResolvedValue(routine),
            update: jest.fn().mockResolvedValue(routine),
          },
        },
      ],
    }).compile();

    resolver = module.get<RoutineResolver>(RoutineResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  it('should get all not deleted routines', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getAllNotDeletedRoutinesByUserId(id, info);
    expect(result).toEqual(routine);
  });

  it('should create a routine', async () => {
    const info = {} as GraphQLResolveInfo;
    const result = await resolver.createRoutine(
      routine as RoutineCreateInput,
      info,
    );

    expect(result).toEqual(routine);
  });

  it('should update a routine', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.updateRoutine(
      id,
      routine as RoutineUpdateInput,
      info,
    );

    expect(result).toEqual(routine);
  });
});
