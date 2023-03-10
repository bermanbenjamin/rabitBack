import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutTimerInput } from './habit-create-without-timer.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutTimerInput } from './habit-create-or-connect-without-timer.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedOneWithoutTimerInput {

    @Field(() => HabitCreateWithoutTimerInput, {nullable:true})
    @Type(() => HabitCreateWithoutTimerInput)
    create?: HabitCreateWithoutTimerInput;

    @Field(() => HabitCreateOrConnectWithoutTimerInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutTimerInput)
    connectOrCreate?: HabitCreateOrConnectWithoutTimerInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
