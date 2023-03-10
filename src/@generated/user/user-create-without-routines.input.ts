import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateplantsInput } from './user-createplants.input';
import { UserSettingsCreateNestedOneWithoutUserInput } from '../user-settings/user-settings-create-nested-one-without-user.input';
import { HabitCreateNestedManyWithoutUserInput } from '../habit/habit-create-nested-many-without-user.input';
import { ToDoListCreateNestedManyWithoutUserInput } from '../to-do-list/to-do-list-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutRoutinesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Date, {nullable:false})
    birthdate!: Date | string;

    @Field(() => Int, {nullable:true})
    coins?: number;

    @Field(() => Int, {nullable:true})
    bestStreak?: number;

    @Field(() => Int, {nullable:true})
    currentStreak?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => Date, {nullable:true})
    lastDailyReward?: Date | string;

    @Field(() => Int, {nullable:true})
    dailyRewardCount?: number;

    @Field(() => UserCreateplantsInput, {nullable:true})
    plants?: UserCreateplantsInput;

    @Field(() => UserSettingsCreateNestedOneWithoutUserInput, {nullable:false})
    userSettings!: UserSettingsCreateNestedOneWithoutUserInput;

    @Field(() => HabitCreateNestedManyWithoutUserInput, {nullable:true})
    habits?: HabitCreateNestedManyWithoutUserInput;

    @Field(() => ToDoListCreateNestedManyWithoutUserInput, {nullable:true})
    toDos?: ToDoListCreateNestedManyWithoutUserInput;
}
