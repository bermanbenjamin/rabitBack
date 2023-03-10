import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutIntervalInput } from './habit-create-without-interval.input';
import { HabitCreateOrConnectWithoutIntervalInput } from './habit-create-or-connect-without-interval.input';
import { HabitUpsertWithoutIntervalInput } from './habit-upsert-without-interval.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutIntervalInput } from './habit-update-without-interval.input';

@InputType()
export class HabitUncheckedUpdateOneWithoutIntervalInput {

    @Field(() => HabitCreateWithoutIntervalInput, {nullable:true})
    create?: HabitCreateWithoutIntervalInput;

    @Field(() => HabitCreateOrConnectWithoutIntervalInput, {nullable:true})
    connectOrCreate?: HabitCreateOrConnectWithoutIntervalInput;

    @Field(() => HabitUpsertWithoutIntervalInput, {nullable:true})
    upsert?: HabitUpsertWithoutIntervalInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutIntervalInput, {nullable:true})
    update?: HabitUpdateWithoutIntervalInput;
}
