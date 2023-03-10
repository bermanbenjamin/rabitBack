import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutHistoryInput } from './habit-create-without-history.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutHistoryInput } from './habit-create-or-connect-without-history.input';
import { HabitUpsertWithoutHistoryInput } from './habit-upsert-without-history.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutHistoryInput } from './habit-update-without-history.input';

@InputType()
export class HabitUpdateOneRequiredWithoutHistoryNestedInput {

    @Field(() => HabitCreateWithoutHistoryInput, {nullable:true})
    @Type(() => HabitCreateWithoutHistoryInput)
    create?: HabitCreateWithoutHistoryInput;

    @Field(() => HabitCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: HabitCreateOrConnectWithoutHistoryInput;

    @Field(() => HabitUpsertWithoutHistoryInput, {nullable:true})
    @Type(() => HabitUpsertWithoutHistoryInput)
    upsert?: HabitUpsertWithoutHistoryInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutHistoryInput, {nullable:true})
    @Type(() => HabitUpdateWithoutHistoryInput)
    update?: HabitUpdateWithoutHistoryInput;
}
