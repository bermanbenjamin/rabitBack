import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutReminderInput } from './habit-create-without-reminder.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutReminderInput } from './habit-create-or-connect-without-reminder.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedOneWithoutReminderInput {

    @Field(() => HabitCreateWithoutReminderInput, {nullable:true})
    @Type(() => HabitCreateWithoutReminderInput)
    create?: HabitCreateWithoutReminderInput;

    @Field(() => HabitCreateOrConnectWithoutReminderInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutReminderInput)
    connectOrCreate?: HabitCreateOrConnectWithoutReminderInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
