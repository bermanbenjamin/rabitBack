import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalUpdateManyMutationInput } from './habit-interval-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitIntervalWhereInput } from './habit-interval-where.input';

@ArgsType()
export class UpdateManyHabitIntervalArgs {

    @Field(() => HabitIntervalUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitIntervalUpdateManyMutationInput)
    data!: HabitIntervalUpdateManyMutationInput;

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    @Type(() => HabitIntervalWhereInput)
    where?: HabitIntervalWhereInput;
}
