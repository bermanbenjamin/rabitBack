import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderCreateManyHabitInput } from './habit-reminder-create-many-habit.input';
import { Type } from 'class-transformer';

@InputType()
export class HabitReminderCreateManyHabitInputEnvelope {

    @Field(() => [HabitReminderCreateManyHabitInput], {nullable:false})
    @Type(() => HabitReminderCreateManyHabitInput)
    data!: Array<HabitReminderCreateManyHabitInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
