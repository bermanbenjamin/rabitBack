import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitColorEnum } from '../prisma/habit-color.enum';
import { HabitIconEnum } from '../prisma/habit-icon.enum';
import { HabitPeriodEnum } from '../prisma/habit-period.enum';
import { HabitHistoryDayUncheckedCreateNestedManyWithoutHabitInput } from '../habit-history-day/habit-history-day-unchecked-create-nested-many-without-habit.input';
import { HabitReminderUncheckedCreateNestedManyWithoutHabitInput } from '../habit-reminder/habit-reminder-unchecked-create-nested-many-without-habit.input';

@InputType()
export class HabitUncheckedCreateWithoutPlantInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    routineId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

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

    @Field(() => String, {nullable:false})
    habitTimerId!: string;

    @Field(() => String, {nullable:false})
    habitIntervalId!: string;

    @Field(() => HabitColorEnum, {nullable:true})
    color?: keyof typeof HabitColorEnum;

    @Field(() => HabitIconEnum, {nullable:false})
    icon!: keyof typeof HabitIconEnum;

    @Field(() => HabitPeriodEnum, {nullable:true})
    period?: keyof typeof HabitPeriodEnum;

    @Field(() => HabitHistoryDayUncheckedCreateNestedManyWithoutHabitInput, {nullable:true})
    history?: HabitHistoryDayUncheckedCreateNestedManyWithoutHabitInput;

    @Field(() => HabitReminderUncheckedCreateNestedManyWithoutHabitInput, {nullable:true})
    reminder?: HabitReminderUncheckedCreateNestedManyWithoutHabitInput;
}
