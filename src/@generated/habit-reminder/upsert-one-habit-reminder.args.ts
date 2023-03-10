import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Type } from 'class-transformer';
import { HabitReminderCreateInput } from './habit-reminder-create.input';
import { HabitReminderUpdateInput } from './habit-reminder-update.input';

@ArgsType()
export class UpsertOneHabitReminderArgs {

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;

    @Field(() => HabitReminderCreateInput, {nullable:false})
    @Type(() => HabitReminderCreateInput)
    create!: HabitReminderCreateInput;

    @Field(() => HabitReminderUpdateInput, {nullable:false})
    @Type(() => HabitReminderUpdateInput)
    update!: HabitReminderUpdateInput;
}
