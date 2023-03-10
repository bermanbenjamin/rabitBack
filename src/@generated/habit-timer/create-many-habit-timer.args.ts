import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerCreateManyInput } from './habit-timer-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitTimerArgs {

    @Field(() => [HabitTimerCreateManyInput], {nullable:false})
    @Type(() => HabitTimerCreateManyInput)
    data!: Array<HabitTimerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
