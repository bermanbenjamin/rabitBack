import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitColorEnum } from '../prisma/habit-color.enum';
import { HabitIconEnum } from '../prisma/habit-icon.enum';
import { HabitPeriodEnum } from '../prisma/habit-period.enum';
import { HabitHistoryDay } from '../habit-history-day/habit-history-day.model';
import { HabitTimer } from '../habit-timer/habit-timer.model';
import { Routine } from '../routine/routine.model';
import { User } from '../user/user.model';
import { HabitPlant } from '../habit-plant/habit-plant.model';
import { HabitReminder } from '../habit-reminder/habit-reminder.model';
import { HabitInterval } from '../habit-interval/habit-interval.model';
import { HabitCount } from './habit-count.output';

@ObjectType()
export class Habit {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    routineId!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:1})
    frequencyPerDay!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPaused!: boolean;

    @Field(() => Date, {nullable:false})
    lastPlantReward!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:false})
    habitPlantId!: string;

    @Field(() => String, {nullable:false})
    habitTimerId!: string;

    @Field(() => String, {nullable:false})
    habitIntervalId!: string;

    @Field(() => HabitColorEnum, {nullable:false,defaultValue:'cyan'})
    color!: keyof typeof HabitColorEnum;

    @Field(() => HabitIconEnum, {nullable:false})
    icon!: keyof typeof HabitIconEnum;

    @Field(() => HabitPeriodEnum, {nullable:false,defaultValue:'anyTime'})
    period!: keyof typeof HabitPeriodEnum;

    @Field(() => [HabitHistoryDay], {nullable:true})
    history?: Array<HabitHistoryDay>;

    @Field(() => HabitTimer, {nullable:false})
    timer?: HabitTimer;

    @Field(() => Routine, {nullable:true})
    Routine?: Routine | null;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => HabitPlant, {nullable:false})
    plant?: HabitPlant;

    @Field(() => [HabitReminder], {nullable:true})
    reminder?: Array<HabitReminder>;

    @Field(() => HabitInterval, {nullable:false})
    interval?: HabitInterval;

    @Field(() => HabitCount, {nullable:false})
    _count?: HabitCount;
}
