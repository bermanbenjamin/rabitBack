import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHabitReminderArgs {

    @Field(() => HabitReminderWhereUniqueInput, {nullable:false})
    @Type(() => HabitReminderWhereUniqueInput)
    where!: HabitReminderWhereUniqueInput;
}
