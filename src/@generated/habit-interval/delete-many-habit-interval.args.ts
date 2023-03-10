import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalWhereInput } from './habit-interval-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitIntervalArgs {

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    @Type(() => HabitIntervalWhereInput)
    where?: HabitIntervalWhereInput;
}
