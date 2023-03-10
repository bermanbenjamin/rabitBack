import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayScalarWhereInput } from './habit-history-day-scalar-where.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayUpdateManyMutationInput } from './habit-history-day-update-many-mutation.input';

@InputType()
export class HabitHistoryDayUpdateManyWithWhereWithoutHabitInput {

    @Field(() => HabitHistoryDayScalarWhereInput, {nullable:false})
    @Type(() => HabitHistoryDayScalarWhereInput)
    where!: HabitHistoryDayScalarWhereInput;

    @Field(() => HabitHistoryDayUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitHistoryDayUpdateManyMutationInput)
    data!: HabitHistoryDayUpdateManyMutationInput;
}
