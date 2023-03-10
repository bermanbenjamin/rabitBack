import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumPlantEnumNullableListFilter } from '../prisma/enum-plant-enum-nullable-list-filter.input';
import { UserSettingsRelationFilter } from '../user-settings/user-settings-relation-filter.input';
import { RoutineListRelationFilter } from '../routine/routine-list-relation-filter.input';
import { HabitListRelationFilter } from '../habit/habit-list-relation-filter.input';
import { ToDoListListRelationFilter } from '../to-do-list/to-do-list-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    birthdate?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    coins?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bestStreak?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currentStreak?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    lastDailyReward?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    dailyRewardCount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userSettingsId?: StringFilter;

    @Field(() => EnumPlantEnumNullableListFilter, {nullable:true})
    plants?: EnumPlantEnumNullableListFilter;

    @Field(() => UserSettingsRelationFilter, {nullable:true})
    userSettings?: UserSettingsRelationFilter;

    @Field(() => RoutineListRelationFilter, {nullable:true})
    routines?: RoutineListRelationFilter;

    @Field(() => HabitListRelationFilter, {nullable:true})
    habits?: HabitListRelationFilter;

    @Field(() => ToDoListListRelationFilter, {nullable:true})
    toDos?: ToDoListListRelationFilter;
}
