import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderUpdateInput } from './habit-reminder-update.input';
import { Type } from 'class-transformer';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';

@ArgsType()
export class UpdateOneHabitReminderArgs {

    @Field(() => HabitReminderUpdateInput, {nullable:false})
    @Type(() => HabitReminderUpdateInput)
    data!: HabitReminderUpdateInput;

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;
}
