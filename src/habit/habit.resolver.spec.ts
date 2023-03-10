import { Test, TestingModule } from '@nestjs/testing';
import { HabitIconEnum, HabitPeriodEnum } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { HabitCreateInput } from '../@generated/habit/habit-create.input';
import { HabitUpdateInput } from '../@generated/habit/habit-update.input';
import { Habit } from '../@generated/habit/habit.model';
import { HabitColorEnum } from '../@generated/prisma/habit-color.enum';
import { HabitResolver } from './habit.resolver';
import { HabitService } from './habit.service';

const habit: Habit = {
  id: '1',
  title: 'test',
  userId: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false,
  routineId: '1',
  color: HabitColorEnum.cyan,
  frequencyPerDay: 1,
  habitIntervalId: '1',
  habitPlantId: '1',
  habitTimerId: '1',
  icon: HabitIconEnum.blue1,
  isPaused: false,
  lastPlantReward: new Date(),
  period: HabitPeriodEnum.anyTime,
};

describe('HabitResolver', () => {
  let resolver: HabitResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HabitResolver,
        {
          provide: HabitService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(habit),
            findByUserId: jest.fn().mockResolvedValue(habit),
            create: jest.fn().mockResolvedValue(habit),
            update: jest.fn().mockResolvedValue(habit),
          },
        },
      ],
    }).compile();

    resolver = module.get<HabitResolver>(HabitResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  it('should  get all habits', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getHabitsByUserId(id, info);
    expect(result).toEqual(habit);
  });

  it('should get a habit', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getHabit(id, info);
    expect(result).toEqual(habit);
  });

  it('should get all not deleted habits', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getAllNotDeletedHabitsByUserId(id, info);
    expect(result).toEqual(habit);
  });

  it('should create a habit', async () => {
    const info = {} as GraphQLResolveInfo;
    const result = await resolver.createHabit(habit as HabitCreateInput, info);

    expect(result).toEqual(habit);
  });

  it('should update a habit', async () => {
    const info = {} as GraphQLResolveInfo;
    const where = { id: '1' };
    const result = await resolver.updateHabit(
      where,
      habit as HabitUpdateInput,
      info,
    );
    expect(result).toEqual(habit);
  });
});
