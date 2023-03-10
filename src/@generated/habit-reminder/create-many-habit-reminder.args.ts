import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderCreateManyInput } from './habit-reminder-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitReminderArgs {

    @Field(() => [HabitReminderCreateManyInput], {nullable:false})
    @Type(() => HabitReminderCreateManyInput)
    data!: Array<HabitReminderCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
