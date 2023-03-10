import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLResolveInfo } from 'graphql';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

const user = {
  coins: 200,
  name: 'Carla',
  email: 'carla@blury.com',
  age: 35,
  birthdate: new Date(),
  id: '1',
  bestStreak: 0,
  currentStreak: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false,
  dailyRewardCount: 9,
  lastDailyReward: new Date(),
  plants: [],
  userSettingsId: '1',
};

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: {
            findOne: jest.fn().mockResolvedValue(user),
            create: jest.fn().mockResolvedValue(user),
            update: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return a user', async () => {
    const info = {} as GraphQLResolveInfo;
    const id = '1';
    const result = await resolver.getUser(id, info);
    expect(result).toEqual(user);
  });

  it('should create a user', async () => {
    const info = {} as GraphQLResolveInfo;
    const data: UserCreateInput = {
      coins: 200,
      name: 'Carla',
      email: 'carla@gmail.com',
      age: 35,
      birthdate: new Date(),
      userSettings: {},
    };
    const result = await resolver.createUser(data, info);
    expect(result).toEqual(user);
  });

  it('should update a user', async () => {
    const info = {} as GraphQLResolveInfo;
    const data: UserUpdateInput = {
      coins: {
        set: 400,
      },
    };
    const id = '1';
    expect(await resolver.updateUser(data, id, info)).toEqual(user);
  });
});
