import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalCreateManyInput } from './habit-interval-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitIntervalArgs {

    @Field(() => [HabitIntervalCreateManyInput], {nullable:false})
    @Type(() => HabitIntervalCreateManyInput)
    data!: Array<HabitIntervalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
