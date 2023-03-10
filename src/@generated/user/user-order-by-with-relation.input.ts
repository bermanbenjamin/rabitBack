import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSettingsOrderByWithRelationInput } from '../user-settings/user-settings-order-by-with-relation.input';
import { RoutineOrderByRelationAggregateInput } from '../routine/routine-order-by-relation-aggregate.input';
import { HabitOrderByRelationAggregateInput } from '../habit/habit-order-by-relation-aggregate.input';
import { ToDoListOrderByRelationAggregateInput } from '../to-do-list/to-do-list-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coins?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bestStreak?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentStreak?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastDailyReward?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dailyRewardCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userSettingsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    plants?: keyof typeof SortOrder;

    @Field(() => UserSettingsOrderByWithRelationInput, {nullable:true})
    userSettings?: UserSettingsOrderByWithRelationInput;

    @Field(() => RoutineOrderByRelationAggregateInput, {nullable:true})
    routines?: RoutineOrderByRelationAggregateInput;

    @Field(() => HabitOrderByRelationAggregateInput, {nullable:true})
    habits?: HabitOrderByRelationAggregateInput;

    @Field(() => ToDoListOrderByRelationAggregateInput, {nullable:true})
    toDos?: ToDoListOrderByRelationAggregateInput;
}
