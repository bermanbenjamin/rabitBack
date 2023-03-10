import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutReminderInput } from './habit-create-without-reminder.input';
import { HabitCreateOrConnectWithoutReminderInput } from './habit-create-or-connect-without-reminder.input';
import { HabitUpsertWithoutReminderInput } from './habit-upsert-without-reminder.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutReminderInput } from './habit-update-without-reminder.input';

@InputType()
export class HabitUpdateOneRequiredWithoutReminderInput {

    @Field(() => HabitCreateWithoutReminderInput, {nullable:true})
    create?: HabitCreateWithoutReminderInput;

    @Field(() => HabitCreateOrConnectWithoutReminderInput, {nullable:true})
    connectOrCreate?: HabitCreateOrConnectWithoutReminderInput;

    @Field(() => HabitUpsertWithoutReminderInput, {nullable:true})
    upsert?: HabitUpsertWithoutReminderInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutReminderInput, {nullable:true})
    update?: HabitUpdateWithoutReminderInput;
}
