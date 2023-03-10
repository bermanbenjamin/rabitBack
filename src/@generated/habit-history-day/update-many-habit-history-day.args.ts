import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayUpdateManyMutationInput } from './habit-history-day-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayWhereInput } from './habit-history-day-where.input';

@ArgsType()
export class UpdateManyHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitHistoryDayUpdateManyMutationInput)
    data!: HabitHistoryDayUpdateManyMutationInput;

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    @Type(() => HabitHistoryDayWhereInput)
    where?: HabitHistoryDayWhereInput;
}
