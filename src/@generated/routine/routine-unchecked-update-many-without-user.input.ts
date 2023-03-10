import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutUserInput } from './routine-create-without-user.input';
import { RoutineCreateOrConnectWithoutUserInput } from './routine-create-or-connect-without-user.input';
import { RoutineUpsertWithWhereUniqueWithoutUserInput } from './routine-upsert-with-where-unique-without-user.input';
import { RoutineCreateManyUserInputEnvelope } from './routine-create-many-user-input-envelope.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { RoutineUpdateWithWhereUniqueWithoutUserInput } from './routine-update-with-where-unique-without-user.input';
import { RoutineUpdateManyWithWhereWithoutUserInput } from './routine-update-many-with-where-without-user.input';
import { RoutineScalarWhereInput } from './routine-scalar-where.input';

@InputType()
export class RoutineUncheckedUpdateManyWithoutUserInput {

    @Field(() => [RoutineCreateWithoutUserInput], {nullable:true})
    create?: Array<RoutineCreateWithoutUserInput>;

    @Field(() => [RoutineCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<RoutineCreateOrConnectWithoutUserInput>;

    @Field(() => [RoutineUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<RoutineUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RoutineCreateManyUserInputEnvelope, {nullable:true})
    createMany?: RoutineCreateManyUserInputEnvelope;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    set?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    delete?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    connect?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<RoutineUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RoutineUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<RoutineUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RoutineScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoutineScalarWhereInput>;
}
