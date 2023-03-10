import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUpdateWithoutHistoryInput } from './habit-update-without-history.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutHistoryInput } from './habit-create-without-history.input';

@InputType()
export class HabitUpsertWithoutHistoryInput {

    @Field(() => HabitUpdateWithoutHistoryInput, {nullable:false})
    @Type(() => HabitUpdateWithoutHistoryInput)
    update!: HabitUpdateWithoutHistoryInput;

    @Field(() => HabitCreateWithoutHistoryInput, {nullable:false})
    @Type(() => HabitCreateWithoutHistoryInput)
    create!: HabitCreateWithoutHistoryInput;
}
