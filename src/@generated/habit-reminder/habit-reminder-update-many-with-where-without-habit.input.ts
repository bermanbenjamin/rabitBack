import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitReminderScalarWhereInput } from './habit-reminder-scalar-where.input';
import { Type } from 'class-transformer';
import { HabitReminderUpdateManyMutationInput } from './habit-reminder-update-many-mutation.input';

@InputType()
export class HabitReminderUpdateManyWithWhereWithoutHabitInput {

    @Field(() => HabitReminderScalarWhereInput, {nullable:false})
    @Type(() => HabitReminderScalarWhereInput)
    where!: HabitReminderScalarWhereInput;

    @Field(() => HabitReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitReminderUpdateManyMutationInput)
    data!: HabitReminderUpdateManyMutationInput;
}
