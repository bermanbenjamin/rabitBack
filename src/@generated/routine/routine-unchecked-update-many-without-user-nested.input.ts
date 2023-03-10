import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutUserInput } from './routine-create-without-user.input';
import { Type } from 'class-transformer';
import { RoutineCreateOrConnectWithoutUserInput } from './routine-create-or-connect-without-user.input';
import { RoutineUpsertWithWhereUniqueWithoutUserInput } from './routine-upsert-with-where-unique-without-user.input';
import { RoutineCreateManyUserInputEnvelope } from './routine-create-many-user-input-envelope.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { RoutineUpdateWithWhereUniqueWithoutUserInput } from './routine-update-with-where-unique-without-user.input';
import { RoutineUpdateManyWithWhereWithoutUserInput } from './routine-update-many-with-where-without-user.input';
import { RoutineScalarWhereInput } from './routine-scalar-where.input';

@InputType()
export class RoutineUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [RoutineCreateWithoutUserInput], {nullable:true})
    @Type(() => RoutineCreateWithoutUserInput)
    create?: Array<RoutineCreateWithoutUserInput>;

    @Field(() => [RoutineCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RoutineCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RoutineCreateOrConnectWithoutUserInput>;

    @Field(() => [RoutineUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RoutineUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RoutineUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RoutineCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RoutineCreateManyUserInputEnvelope)
    createMany?: RoutineCreateManyUserInputEnvelope;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    set?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    disconnect?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    delete?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    connect?: Array<RoutineWhereUniqueInput>;

    @Field(() => [RoutineUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RoutineUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RoutineUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RoutineUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RoutineUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RoutineUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RoutineScalarWhereInput], {nullable:true})
    @Type(() => RoutineScalarWhereInput)
    deleteMany?: Array<RoutineScalarWhereInput>;
}
