import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { Type } from 'class-transformer';
import { HabitIntervalCreateInput } from './habit-interval-create.input';
import { HabitIntervalUpdateInput } from './habit-interval-update.input';

@ArgsType()
export class UpsertOneHabitIntervalArgs {

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:false})
    @Type(() => HabitIntervalWhereUniqueInput)
    where!: HabitIntervalWhereUniqueInput;

    @Field(() => HabitIntervalCreateInput, {nullable:false})
    @Type(() => HabitIntervalCreateInput)
    create!: HabitIntervalCreateInput;

    @Field(() => HabitIntervalUpdateInput, {nullable:false})
    @Type(() => HabitIntervalUpdateInput)
    update!: HabitIntervalUpdateInput;
}
