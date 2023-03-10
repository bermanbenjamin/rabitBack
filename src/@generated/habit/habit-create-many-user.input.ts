import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitColorEnum } from '../prisma/habit-color.enum';
import { HabitIconEnum } from '../prisma/habit-icon.enum';
import { HabitPeriodEnum } from '../prisma/habit-period.enum';

@InputType()
export class HabitCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    routineId?: string;

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
    habitPlantId!: string;

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
}
