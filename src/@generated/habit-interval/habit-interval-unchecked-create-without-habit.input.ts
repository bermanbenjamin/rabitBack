import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitIntervalCreatedaysOfWeekInput } from './habit-interval-createdays-of-week.input';
import { HabitIntervalTypeEnum } from '../prisma/habit-interval-type.enum';

@InputType()
export class HabitIntervalUncheckedCreateWithoutHabitInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    timesPerWeek!: number;

    @Field(() => HabitIntervalCreatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: HabitIntervalCreatedaysOfWeekInput;

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    type?: keyof typeof HabitIntervalTypeEnum;
}
