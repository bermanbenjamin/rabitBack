import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderCreateInput } from './habit-reminder-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitReminderArgs {

    @Field(() => HabitReminderCreateInput, {nullable:false})
    @Type(() => HabitReminderCreateInput)
    data!: HabitReminderCreateInput;
}
