import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';
import { UserSettings } from '../user-settings/user-settings.model';
import { Routine } from '../routine/routine.model';
import { Habit } from '../habit/habit.model';
import { ToDoList } from '../to-do-list/to-do-list.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Date, {nullable:false})
    birthdate!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    coins!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    bestStreak!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    currentStreak!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    lastDailyReward!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dailyRewardCount!: number;

    @Field(() => String, {nullable:false})
    userSettingsId!: string;

    @Field(() => [PlantEnum], {nullable:true})
    plants!: Array<keyof typeof PlantEnum>;

    @Field(() => UserSettings, {nullable:false})
    userSettings?: UserSettings;

    @Field(() => [Routine], {nullable:true})
    routines?: Array<Routine>;

    @Field(() => [Habit], {nullable:true})
    habits?: Array<Habit>;

    @Field(() => [ToDoList], {nullable:true})
    toDos?: Array<ToDoList>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
