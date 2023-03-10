import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalCreateWithoutHabitInput } from './habit-interval-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitIntervalCreateOrConnectWithoutHabitInput } from './habit-interval-create-or-connect-without-habit.input';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';

@InputType()
export class HabitIntervalCreateNestedOneWithoutHabitInput {

    @Field(() => HabitIntervalCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalCreateWithoutHabitInput)
    create?: HabitIntervalCreateWithoutHabitInput;

    @Field(() => HabitIntervalCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitIntervalCreateOrConnectWithoutHabitInput;

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:true})
    @Type(() => HabitIntervalWhereUniqueInput)
    connect?: HabitIntervalWhereUniqueInput;
}
