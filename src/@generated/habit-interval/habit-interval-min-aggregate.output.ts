import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HabitIntervalTypeEnum } from '../prisma/habit-interval-type.enum';

@ObjectType()
export class HabitIntervalMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    timesPerWeek?: number;

    @Field(() => HabitIntervalTypeEnum, {nullable:true})
    type?: keyof typeof HabitIntervalTypeEnum;
}
