import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutTimerInput } from './habit-update-without-timer.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutTimerInput } from './habit-create-without-timer.input';

@InputType()
export class HabitUpsertWithoutTimerInput {

    @Field(() => HabitUpdateWithoutTimerInput, {nullable:false})
    @Type(() => HabitUpdateWithoutTimerInput)
    update!: HabitUpdateWithoutTimerInput;

    @Field(() => HabitCreateWithoutTimerInput, {nullable:false})
    @Type(() => HabitCreateWithoutTimerInput)
    create!: HabitCreateWithoutTimerInput;
}
