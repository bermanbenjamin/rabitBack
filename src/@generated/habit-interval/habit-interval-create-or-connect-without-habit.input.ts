import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { Type } from 'class-transformer';
import { HabitIntervalCreateWithoutHabitInput } from './habit-interval-create-without-habit.input';

@InputType()
export class HabitIntervalCreateOrConnectWithoutHabitInput {

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:false})
    @Type(() => HabitIntervalWhereUniqueInput)
    where!: HabitIntervalWhereUniqueInput;

    @Field(() => HabitIntervalCreateWithoutHabitInput, {nullable:false})
    @Type(() => HabitIntervalCreateWithoutHabitInput)
    create!: HabitIntervalCreateWithoutHabitInput;
}
