import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutTimerInput } from './habit-create-without-timer.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutTimerInput } from './habit-create-or-connect-without-timer.input';
import { HabitUpsertWithoutTimerInput } from './habit-upsert-without-timer.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutTimerInput } from './habit-update-without-timer.input';

@InputType()
export class HabitUpdateOneWithoutTimerNestedInput {

    @Field(() => HabitCreateWithoutTimerInput, {nullable:true})
    @Type(() => HabitCreateWithoutTimerInput)
    create?: HabitCreateWithoutTimerInput;

    @Field(() => HabitCreateOrConnectWithoutTimerInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutTimerInput)
    connectOrCreate?: HabitCreateOrConnectWithoutTimerInput;

    @Field(() => HabitUpsertWithoutTimerInput, {nullable:true})
    @Type(() => HabitUpsertWithoutTimerInput)
    upsert?: HabitUpsertWithoutTimerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutTimerInput, {nullable:true})
    @Type(() => HabitUpdateWithoutTimerInput)
    update?: HabitUpdateWithoutTimerInput;
}
