import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitHistoryDayCreateWithoutHabitInput } from './habit-history-day-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayCreateOrConnectWithoutHabitInput } from './habit-history-day-create-or-connect-without-habit.input';
import { HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput } from './habit-history-day-upsert-with-where-unique-without-habit.input';
import { HabitHistoryDayCreateManyHabitInputEnvelope } from './habit-history-day-create-many-habit-input-envelope.input';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput } from './habit-history-day-update-with-where-unique-without-habit.input';
import { HabitHistoryDayUpdateManyWithWhereWithoutHabitInput } from './habit-history-day-update-many-with-where-without-habit.input';
import { HabitHistoryDayScalarWhereInput } from './habit-history-day-scalar-where.input';

@InputType()
export class HabitHistoryDayUncheckedUpdateManyWithoutHabitNestedInput {

    @Field(() => [HabitHistoryDayCreateWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayCreateWithoutHabitInput)
    create?: Array<HabitHistoryDayCreateWithoutHabitInput>;

    @Field(() => [HabitHistoryDayCreateOrConnectWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayCreateOrConnectWithoutHabitInput)
    connectOrCreate?: Array<HabitHistoryDayCreateOrConnectWithoutHabitInput>;

    @Field(() => [HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput)
    upsert?: Array<HabitHistoryDayUpsertWithWhereUniqueWithoutHabitInput>;

    @Field(() => HabitHistoryDayCreateManyHabitInputEnvelope, {nullable:true})
    @Type(() => HabitHistoryDayCreateManyHabitInputEnvelope)
    createMany?: HabitHistoryDayCreateManyHabitInputEnvelope;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    set?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    disconnect?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    delete?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayWhereUniqueInput], {nullable:true})
    @Type(() => HabitHistoryDayWhereUniqueInput)
    connect?: Array<HabitHistoryDayWhereUniqueInput>;

    @Field(() => [HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput)
    update?: Array<HabitHistoryDayUpdateWithWhereUniqueWithoutHabitInput>;

    @Field(() => [HabitHistoryDayUpdateManyWithWhereWithoutHabitInput], {nullable:true})
    @Type(() => HabitHistoryDayUpdateManyWithWhereWithoutHabitInput)
    updateMany?: Array<HabitHistoryDayUpdateManyWithWhereWithoutHabitInput>;

    @Field(() => [HabitHistoryDayScalarWhereInput], {nullable:true})
    @Type(() => HabitHistoryDayScalarWhereInput)
    deleteMany?: Array<HabitHistoryDayScalarWhereInput>;
}
