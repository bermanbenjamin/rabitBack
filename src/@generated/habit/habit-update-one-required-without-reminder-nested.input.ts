import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutReminderInput } from './habit-create-without-reminder.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutReminderInput } from './habit-create-or-connect-without-reminder.input';
import { HabitUpsertWithoutReminderInput } from './habit-upsert-without-reminder.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutReminderInput } from './habit-update-without-reminder.input';

@InputType()
export class HabitUpdateOneRequiredWithoutReminderNestedInput {

    @Field(() => HabitCreateWithoutReminderInput, {nullable:true})
    @Type(() => HabitCreateWithoutReminderInput)
    create?: HabitCreateWithoutReminderInput;

    @Field(() => HabitCreateOrConnectWithoutReminderInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutReminderInput)
    connectOrCreate?: HabitCreateOrConnectWithoutReminderInput;

    @Field(() => HabitUpsertWithoutReminderInput, {nullable:true})
    @Type(() => HabitUpsertWithoutReminderInput)
    upsert?: HabitUpsertWithoutReminderInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutReminderInput, {nullable:true})
    @Type(() => HabitUpdateWithoutReminderInput)
    update?: HabitUpdateWithoutReminderInput;
}
