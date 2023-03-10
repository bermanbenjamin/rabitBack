import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderCreateWithoutHabitInput } from './habit-reminder-create-without-habit.input';
import { HabitReminderCreateOrConnectWithoutHabitInput } from './habit-reminder-create-or-connect-without-habit.input';
import { HabitReminderUpsertWithWhereUniqueWithoutHabitInput } from './habit-reminder-upsert-with-where-unique-without-habit.input';
import { HabitReminderCreateManyHabitInputEnvelope } from './habit-reminder-create-many-habit-input-envelope.input';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { HabitReminderUpdateWithWhereUniqueWithoutHabitInput } from './habit-reminder-update-with-where-unique-without-habit.input';
import { HabitReminderUpdateManyWithWhereWithoutHabitInput } from './habit-reminder-update-many-with-where-without-habit.input';
import { HabitReminderScalarWhereInput } from './habit-reminder-scalar-where.input';

@InputType()
export class HabitReminderUncheckedUpdateManyWithoutHabitInput {

    @Field(() => [HabitReminderCreateWithoutHabitInput], {nullable:true})
    create?: Array<HabitReminderCreateWithoutHabitInput>;

    @Field(() => [HabitReminderCreateOrConnectWithoutHabitInput], {nullable:true})
    connectOrCreate?: Array<HabitReminderCreateOrConnectWithoutHabitInput>;

    @Field(() => [HabitReminderUpsertWithWhereUniqueWithoutHabitInput], {nullable:true})
    upsert?: Array<HabitReminderUpsertWithWhereUniqueWithoutHabitInput>;

    @Field(() => HabitReminderCreateManyHabitInputEnvelope, {nullable:true})
    createMany?: HabitReminderCreateManyHabitInputEnvelope;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    set?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    disconnect?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    delete?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    connect?: Array<HabitReminderWhereUniqueInput>;

    @Field(() => [HabitReminderUpdateWithWhereUniqueWithoutHabitInput], {nullable:true})
    update?: Array<HabitReminderUpdateWithWhereUniqueWithoutHabitInput>;

    @Field(() => [HabitReminderUpdateManyWithWhereWithoutHabitInput], {nullable:true})
    updateMany?: Array<HabitReminderUpdateManyWithWhereWithoutHabitInput>;

    @Field(() => [HabitReminderScalarWhereInput], {nullable:true})
    deleteMany?: Array<HabitReminderScalarWhereInput>;
}
