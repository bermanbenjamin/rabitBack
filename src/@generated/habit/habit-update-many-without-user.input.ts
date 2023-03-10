import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutUserInput } from './habit-create-without-user.input';
import { HabitCreateOrConnectWithoutUserInput } from './habit-create-or-connect-without-user.input';
import { HabitUpsertWithWhereUniqueWithoutUserInput } from './habit-upsert-with-where-unique-without-user.input';
import { HabitCreateManyUserInputEnvelope } from './habit-create-many-user-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithWhereUniqueWithoutUserInput } from './habit-update-with-where-unique-without-user.input';
import { HabitUpdateManyWithWhereWithoutUserInput } from './habit-update-many-with-where-without-user.input';
import { HabitScalarWhereInput } from './habit-scalar-where.input';

@InputType()
export class HabitUpdateManyWithoutUserInput {

    @Field(() => [HabitCreateWithoutUserInput], {nullable:true})
    create?: Array<HabitCreateWithoutUserInput>;

    @Field(() => [HabitCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<HabitCreateOrConnectWithoutUserInput>;

    @Field(() => [HabitUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<HabitUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => HabitCreateManyUserInputEnvelope, {nullable:true})
    createMany?: HabitCreateManyUserInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    set?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    disconnect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    delete?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    connect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<HabitUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [HabitUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<HabitUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    deleteMany?: Array<HabitScalarWhereInput>;
}
