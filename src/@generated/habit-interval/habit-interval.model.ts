import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Habit } from '../habit/habit.model';
import { Int } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from '../prisma/habit-interval-type.enum';

@ObjectType()
export class HabitInterval {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Habit, {nullable:true})
    Habit?: Habit | null;

    @Field(() => Int, {nullable:false})
    timesPerWeek!: number;

    @Field(() => [Int], {nullable:true})
    daysOfWeek!: Array<number>;

    @Field(() => HabitIntervalTypeEnum, {nullable:false,defaultValue:'daily'})
    type!: keyof typeof HabitIntervalTypeEnum;
}
