import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereInput } from './habit-reminder-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitReminderArgs {

    @Field(() => HabitReminderWhereInput, {nullable:true})
    @Type(() => HabitReminderWhereInput)
    where?: HabitReminderWhereInput;
}
