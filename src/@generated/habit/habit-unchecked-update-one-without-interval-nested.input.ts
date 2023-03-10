import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutIntervalInput } from './habit-create-without-interval.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutIntervalInput } from './habit-create-or-connect-without-interval.input';
import { HabitUpsertWithoutIntervalInput } from './habit-upsert-without-interval.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutIntervalInput } from './habit-update-without-interval.input';

@InputType()
export class HabitUncheckedUpdateOneWithoutIntervalNestedInput {

    @Field(() => HabitCreateWithoutIntervalInput, {nullable:true})
    @Type(() => HabitCreateWithoutIntervalInput)
    create?: HabitCreateWithoutIntervalInput;

    @Field(() => HabitCreateOrConnectWithoutIntervalInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutIntervalInput)
    connectOrCreate?: HabitCreateOrConnectWithoutIntervalInput;

    @Field(() => HabitUpsertWithoutIntervalInput, {nullable:true})
    @Type(() => HabitUpsertWithoutIntervalInput)
    upsert?: HabitUpsertWithoutIntervalInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutIntervalInput, {nullable:true})
    @Type(() => HabitUpdateWithoutIntervalInput)
    update?: HabitUpdateWithoutIntervalInput;
}
