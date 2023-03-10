import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitColorEnum } from '../prisma/habit-color.enum';
import { HabitIconEnum } from '../prisma/habit-icon.enum';
import { HabitPeriodEnum } from '../prisma/habit-period.enum';
import { HabitCountAggregate } from './habit-count-aggregate.output';
import { HabitAvgAggregate } from './habit-avg-aggregate.output';
import { HabitSumAggregate } from './habit-sum-aggregate.output';
import { HabitMinAggregate } from './habit-min-aggregate.output';
import { HabitMaxAggregate } from './habit-max-aggregate.output';

@ObjectType()
export class HabitGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    routineId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Int, {nullable:false})
    frequencyPerDay!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:false})
    isPaused!: boolean;

    @Field(() => Date, {nullable:false})
    lastPlantReward!: Date | string;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => String, {nullable:false})
    habitPlantId!: string;

    @Field(() => String, {nullable:false})
    habitTimerId!: string;

    @Field(() => String, {nullable:false})
    habitIntervalId!: string;

    @Field(() => HabitColorEnum, {nullable:false})
    color!: keyof typeof HabitColorEnum;

    @Field(() => HabitIconEnum, {nullable:false})
    icon!: keyof typeof HabitIconEnum;

    @Field(() => HabitPeriodEnum, {nullable:false})
    period!: keyof typeof HabitPeriodEnum;

    @Field(() => HabitCountAggregate, {nullable:true})
    _count?: HabitCountAggregate;

    @Field(() => HabitAvgAggregate, {nullable:true})
    _avg?: HabitAvgAggregate;

    @Field(() => HabitSumAggregate, {nullable:true})
    _sum?: HabitSumAggregate;

    @Field(() => HabitMinAggregate, {nullable:true})
    _min?: HabitMinAggregate;

    @Field(() => HabitMaxAggregate, {nullable:true})
    _max?: HabitMaxAggregate;
}
