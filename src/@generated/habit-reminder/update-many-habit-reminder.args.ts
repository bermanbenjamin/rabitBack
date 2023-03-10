import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderUpdateManyMutationInput } from './habit-reminder-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitReminderWhereInput } from './habit-reminder-where.input';

@ArgsType()
export class UpdateManyHabitReminderArgs {

    @Field(() => HabitReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitReminderUpdateManyMutationInput)
    data!: HabitReminderUpdateManyMutationInput;

    @Field(() => HabitReminderWhereInput, {nullable:true})
    @Type(() => HabitReminderWhereInput)
    where?: HabitReminderWhereInput;
}
