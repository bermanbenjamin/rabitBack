import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayCreateManyInput } from './habit-history-day-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitHistoryDayArgs {

    @Field(() => [HabitHistoryDayCreateManyInput], {nullable:false})
    @Type(() => HabitHistoryDayCreateManyInput)
    data!: Array<HabitHistoryDayCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
