import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitHistoryDayOrderByRelationAggregateInput } from '../habit-history-day/habit-history-day-order-by-relation-aggregate.input';
import { HabitTimerOrderByWithRelationInput } from '../habit-timer/habit-timer-order-by-with-relation.input';
import { RoutineOrderByWithRelationInput } from '../routine/routine-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HabitPlantOrderByWithRelationInput } from '../habit-plant/habit-plant-order-by-with-relation.input';
import { HabitReminderOrderByRelationAggregateInput } from '../habit-reminder/habit-reminder-order-by-relation-aggregate.input';
import { HabitIntervalOrderByWithRelationInput } from '../habit-interval/habit-interval-order-by-with-relation.input';

@InputType()
export class HabitOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    routineId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frequencyPerDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPaused?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastPlantReward?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitPlantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitTimerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitIntervalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    period?: keyof typeof SortOrder;

    @Field(() => HabitHistoryDayOrderByRelationAggregateInput, {nullable:true})
    history?: HabitHistoryDayOrderByRelationAggregateInput;

    @Field(() => HabitTimerOrderByWithRelationInput, {nullable:true})
    timer?: HabitTimerOrderByWithRelationInput;

    @Field(() => RoutineOrderByWithRelationInput, {nullable:true})
    Routine?: RoutineOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;

    @Field(() => HabitPlantOrderByWithRelationInput, {nullable:true})
    plant?: HabitPlantOrderByWithRelationInput;

    @Field(() => HabitReminderOrderByRelationAggregateInput, {nullable:true})
    reminder?: HabitReminderOrderByRelationAggregateInput;

    @Field(() => HabitIntervalOrderByWithRelationInput, {nullable:true})
    interval?: HabitIntervalOrderByWithRelationInput;
}
