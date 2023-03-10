import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalCreateInput } from './habit-interval-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitIntervalArgs {

    @Field(() => HabitIntervalCreateInput, {nullable:false})
    @Type(() => HabitIntervalCreateInput)
    data!: HabitIntervalCreateInput;
}
