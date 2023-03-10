import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutTimerInput } from './habit-create-without-timer.input';
import { HabitCreateOrConnectWithoutTimerInput } from './habit-create-or-connect-without-timer.input';
import { HabitUpsertWithoutTimerInput } from './habit-upsert-without-timer.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutTimerInput } from './habit-update-without-timer.input';

@InputType()
export class HabitUncheckedUpdateOneWithoutTimerInput {

    @Field(() => HabitCreateWithoutTimerInput, {nullable:true})
    create?: HabitCreateWithoutTimerInput;

    @Field(() => HabitCreateOrConnectWithoutTimerInput, {nullable:true})
    connectOrCreate?: HabitCreateOrConnectWithoutTimerInput;

    @Field(() => HabitUpsertWithoutTimerInput, {nullable:true})
    upsert?: HabitUpsertWithoutTimerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutTimerInput, {nullable:true})
    update?: HabitUpdateWithoutTimerInput;
}
