import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitColorEnum } from '../prisma/habit-color.enum';
import { HabitIconEnum } from '../prisma/habit-icon.enum';
import { HabitPeriodEnum } from '../prisma/habit-period.enum';
import { HabitHistoryDayCreateNestedManyWithoutHabitInput } from '../habit-history-day/habit-history-day-create-nested-many-without-habit.input';
import { HabitTimerCreateNestedOneWithoutHabitInput } from '../habit-timer/habit-timer-create-nested-one-without-habit.input';
import { RoutineCreateNestedOneWithoutHabitsInput } from '../routine/routine-create-nested-one-without-habits.input';
import { UserCreateNestedOneWithoutHabitsInput } from '../user/user-create-nested-one-without-habits.input';
import { HabitPlantCreateNestedOneWithoutHabitInput } from '../habit-plant/habit-plant-create-nested-one-without-habit.input';
import { HabitReminderCreateNestedManyWithoutHabitInput } from '../habit-reminder/habit-reminder-create-nested-many-without-habit.input';

@InputType()
export class HabitCreateWithoutIntervalInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    frequencyPerDay?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    isPaused?: boolean;

    @Field(() => Date, {nullable:true})
    lastPlantReward?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => HabitColorEnum, {nullable:true})
    color?: keyof typeof HabitColorEnum;

    @Field(() => HabitIconEnum, {nullable:false})
    icon!: keyof typeof HabitIconEnum;

    @Field(() => HabitPeriodEnum, {nullable:true})
    period?: keyof typeof HabitPeriodEnum;

    @Field(() => HabitHistoryDayCreateNestedManyWithoutHabitInput, {nullable:true})
    history?: HabitHistoryDayCreateNestedManyWithoutHabitInput;

    @Field(() => HabitTimerCreateNestedOneWithoutHabitInput, {nullable:false})
    timer!: HabitTimerCreateNestedOneWithoutHabitInput;

    @Field(() => RoutineCreateNestedOneWithoutHabitsInput, {nullable:true})
    Routine?: RoutineCreateNestedOneWithoutHabitsInput;

    @Field(() => UserCreateNestedOneWithoutHabitsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutHabitsInput;

    @Field(() => HabitPlantCreateNestedOneWithoutHabitInput, {nullable:false})
    plant!: HabitPlantCreateNestedOneWithoutHabitInput;

    @Field(() => HabitReminderCreateNestedManyWithoutHabitInput, {nullable:true})
    reminder?: HabitReminderCreateNestedManyWithoutHabitInput;
}
