import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutHistoryInput } from './habit-create-without-history.input';
import { HabitCreateOrConnectWithoutHistoryInput } from './habit-create-or-connect-without-history.input';
import { HabitUpsertWithoutHistoryInput } from './habit-upsert-without-history.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithoutHistoryInput } from './habit-update-without-history.input';

@InputType()
export class HabitUpdateOneRequiredWithoutHistoryInput {

    @Field(() => HabitCreateWithoutHistoryInput, {nullable:true})
    create?: HabitCreateWithoutHistoryInput;

    @Field(() => HabitCreateOrConnectWithoutHistoryInput, {nullable:true})
    connectOrCreate?: HabitCreateOrConnectWithoutHistoryInput;

    @Field(() => HabitUpsertWithoutHistoryInput, {nullable:true})
    upsert?: HabitUpsertWithoutHistoryInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    connect?: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutHistoryInput, {nullable:true})
    update?: HabitUpdateWithoutHistoryInput;
}
