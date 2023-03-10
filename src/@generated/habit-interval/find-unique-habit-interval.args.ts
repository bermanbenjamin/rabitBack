import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHabitIntervalArgs {

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:false})
    @Type(() => HabitIntervalWhereUniqueInput)
    where!: HabitIntervalWhereUniqueInput;
}
