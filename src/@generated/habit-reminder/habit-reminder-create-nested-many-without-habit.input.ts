import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderCreateWithoutHabitInput } from './habit-reminder-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitReminderCreateOrConnectWithoutHabitInput } from './habit-reminder-create-or-connect-without-habit.input';
import { HabitReminderCreateManyHabitInputEnvelope } from './habit-reminder-create-many-habit-input-envelope.input';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';

@InputType()
export class HabitReminderCreateNestedManyWithoutHabitInput {

    @Field(() => [HabitReminderCreateWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderCreateWithoutHabitInput)
    create?: Array<HabitReminderCreateWithoutHabitInput>;

    @Field(() => [HabitReminderCreateOrConnectWithoutHabitInput], {nullable:true})
    @Type(() => HabitReminderCreateOrConnectWithoutHabitInput)
    connectOrCreate?: Array<HabitReminderCreateOrConnectWithoutHabitInput>;

    @Field(() => HabitReminderCreateManyHabitInputEnvelope, {nullable:true})
    @Type(() => HabitReminderCreateManyHabitInputEnvelope)
    createMany?: HabitReminderCreateManyHabitInputEnvelope;

    @Field(() => [HabitReminderWhereUniqueInput], {nullable:true})
    @Type(() => HabitReminderWhereUniqueInput)
    connect?: Array<HabitReminderWhereUniqueInput>;
}
