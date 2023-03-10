import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutTimerInput } from './habit-create-without-timer.input';

@InputType()
export class HabitCreateOrConnectWithoutTimerInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutTimerInput, {nullable:false})
    @Type(() => HabitCreateWithoutTimerInput)
    create!: HabitCreateWithoutTimerInput;
}
