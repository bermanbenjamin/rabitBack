import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayCreateWithoutHabitInput } from './habit-history-day-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayCreateOrConnectWithoutHabitInput } from './habit-history-day-create-or-connect-without-habit.input';
import { HabitHistoryDayCreateManyHabitInputEnvelope } from './habit-history-day-create-many-habit-input-envelope.input';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';

@InputType()
export class HabitHistoryDayUncheckedCreateNestedManyWithoutHabitInput {

    @Field(() => [HabitHistoryDayCreateWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayCreateWithoutHabitInput)
    create?: Array<HabitHistoryDayCreateWithoutHabitInput>;

    @Field(() => [HabitHistoryDayCreateOrConnectWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayCreateOrConnectWithoutHabitInput)
    connectOrCreate?: Array<HabitHistoryDayCreateOrConnectWithoutHabitInput>;

    @Field(() => HabitHistoryDayCreateManyHabitInputEnvelope, {nullable:true})
    @Type(() => HabitHistoryDayCreateManyHabitInputEnvelope)
    createMany?: HabitHistoryDayCreateManyHabitInputEnvelope;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    connect?: Array<HabitHistoryDayWhereUniqueInput>;
}
