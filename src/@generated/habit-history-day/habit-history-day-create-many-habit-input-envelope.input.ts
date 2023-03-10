import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayCreateManyHabitInput } from './habit-history-day-create-many-habit.input';
import { Type } from 'class-transformer';

@InputType()
export class HabitHistoryDayCreateManyHabitInputEnvelope {

    @Field(() => [HabitHistoryDayCreateManyHabitInput], {nullable:false})
    @Type(() => HabitHistoryDayCreateManyHabitInput)
    data!: Array<HabitHistoryDayCreateManyHabitInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
