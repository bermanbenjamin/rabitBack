import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayCreateWithoutHabitInput } from './habit-history-day-create-without-habit.input';
import { HabitHistoryDayCreateOrConnectWithoutHabitInput } from './habit-history-day-create-or-connect-without-habit.input';
import { HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput } from './habit-history-day-upsert-with-where-unique-without-habit.input';
import { HabitHistoryDayCreateManyHabitInputEnvelope } from './habit-history-day-create-many-habit-input-envelope.input';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput } from './habit-history-day-update-with-where-unique-without-habit.input';
import { HabitHistoryDayUpdateManyWithWhereWithoutHabitInput } from './habit-history-day-update-many-with-where-without-habit.input';
import { HabitHistoryDayScalarWhereInput } from './habit-history-day-scalar-where.input';

@InputType()
export class HabitHistoryDayUncheckedUpdateManyWithoutHabitInput {

    @Field(() => [HabitHistoryDayCreateWithoutHabitInput], {nullable:true})
    create?: Array<HabitHistoryDayCreateWithoutHabitInput>;

    @Field(() => [HabitHistoryDayCreateOrConnectWithoutHabitInput], {nullable:true})
    connectOrCreate?: Array<HabitHistoryDayCreateOrConnectWithoutHabitInput>;

    @Field(() => [HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput], {nullable:true})
    upsert?: Array<HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput>;

    @Field(() => HabitHistoryDayCreateManyHabitInputEnvelope, {nullable:true})
    createMany?: HabitHistoryDayCreateManyHabitInputEnvelope;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    set?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    disconnect?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    delete?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    connect?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput], {nullable:true})
    update?: Array<HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput>;

    @Field(() => [HabitHistoryDayUpdateManyWithWhereWithoutHabitInput], {nullable:true})
    updateMany?: Array<HabitHistoryDayUpdateManyWithWhereWithoutHabitInput>;

    @Field(() => [HabitHistoryDayScalarWhereInput], {nullable:true})
    deleteMany?: Array<HabitHistoryDayScalarWhereInput>;
}
