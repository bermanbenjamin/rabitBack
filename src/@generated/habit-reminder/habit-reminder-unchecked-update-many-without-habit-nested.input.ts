import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderCreateWithoutHabitInput } from './habit-reminder-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitReminderCreateOrConnectWithoutHabitInput } from './habit-reminder-create-or-connect-without-habit.input';
import { HabitReminderUpsertWithWhereUniqueWithoutHabitInput } from './habit-reminder-upsert-with-where-unique-without-habit.input';
import { HabitReminderCreateManyHabitInputEnvelope } from './habit-reminder-create-many-habit-input-envelope.input';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { HabitReminderUpdateWithWhereUniqueWithoutHabitInput } from './habit-reminder-update-with-where-unique-without-habit.input';
import { HabitReminderUpdateManyWithWhereWithoutHabitInput } from './habit-reminder-update-many-with-where-without-habit.input';
import { HabitReminderScalarWhereInput } from './habit-reminder-scalar-where.input';

@InputType()
export class HabitReminderUncheckedUpdateManyWithoutHabitNestedInput {

    @Field(() => [HabitReminderCreateWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderCreateWithoutHabitInput)
    create?: Array<HabitReminderCreateWithoutHabitInput>;

    @Field(() => [HabitReminderCreateOrConnectWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderCreateOrConnectWithoutHabitInput)
    connectOrCreate?: Array<HabitReminderCreateOrConnectWithoutHabitInput>;

    @Field(() => [HabitReminderUpsertWithWhereUniqueWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderUpsertWithWhereUniqueWithoutHabitInput)
    upsert?: Array<HabitReminderUpsertWithWhereUniqueWithoutHabitInput>;

    @Field(() => HabitReminderCreateManyHabitInputEnvelope, {nullable:true})
    @Type(() => HabitReminderCreateManyHabitInputEnvelope)
    createMany?: HabitReminderCreateManyHabitInputEnvelope;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    @Type(() => HabitReminderWhereUniqueInput)
    set?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    @Type(() => HabitReminderWhereUniqueInput)
    disconnect?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    @Type(() => HabitReminderWhereUniqueInput)
    delete?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    @Type(() => HabitReminderWhereUniqueInput)
    connect?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderUpdateWithWhereUniqueWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderUpdateWithWhereUniqueWithoutHabitInput)
    update?: Array<HabitReminderUpdateWithWhereUniqueWithoutHabitInput>;

    @Field(() => [HabitReminderUpdateManyWithWhereWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderUpdateManyWithWhereWithoutHabitInput)
    updateMany?: Array<HabitReminderUpdateManyWithWhereWithoutHabitInput>;

    @Field(() => [HabitReminderScalarWhereInput], {nullable:true})
    @Type(() => HabitReminderScalarWhereInput)
    deleteMany?: Array<HabitReminderScalarWhereInput>;
}
