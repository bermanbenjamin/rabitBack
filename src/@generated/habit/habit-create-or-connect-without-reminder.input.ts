import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutReminderInput } from './habit-create-without-reminder.input';

@InputType()
export class HabitCreateOrConnectWithoutReminderInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutReminderInput, {nullable:false})
    @Type(() => HabitCreateWithoutReminderInput)
    create!: HabitCreateWithoutReminderInput;
}
