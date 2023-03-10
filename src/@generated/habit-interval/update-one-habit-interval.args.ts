import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalUpdateInput } from './habit-interval-update.input';
import { Type } from 'class-transformer';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';

@ArgsType()
export class UpdateOneHabitIntervalArgs {

    @Field(() => HabitIntervalUpdateInput, {nullable:false})
    @Type(() => HabitIntervalUpdateInput)
    data!: HabitIntervalUpdateInput;

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:false})
    @Type(() => HabitIntervalWhereUniqueInput)
    where!: HabitIntervalWhereUniqueInput;
}
