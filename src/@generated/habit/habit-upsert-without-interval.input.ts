import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutIntervalInput } from './habit-update-without-interval.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutIntervalInput } from './habit-create-without-interval.input';

@InputType()
export class HabitUpsertWithoutIntervalInput {

    @Field(() => HabitUpdateWithoutIntervalInput, {nullable:false})
    @Type(() => HabitUpdateWithoutIntervalInput)
    update!: HabitUpdateWithoutIntervalInput;

    @Field(() => HabitCreateWithoutIntervalInput, {nullable:false})
    @Type(() => HabitCreateWithoutIntervalInput)
    create!: HabitCreateWithoutIntervalInput;
}
