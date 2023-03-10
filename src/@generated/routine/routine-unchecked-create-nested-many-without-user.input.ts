import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutUserInput } from './routine-create-without-user.input';
import { Type } from 'class-transformer';
import { RoutineCreateOrConnectWithoutUserInput } from './routine-create-or-connect-without-user.input';
import { RoutineCreateManyUserInputEnvelope } from './routine-create-many-user-input-envelope.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';

@InputType()
export class RoutineUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RoutineCreateWithoutUserInput], {nullable:true})
    @Type(() => RoutineCreateWithoutUserInput)
    create?: Array<RoutineCreateWithoutUserInput>;

    @Field(() => [RoutineCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RoutineCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RoutineCreateOrConnectWithoutUserInput>;

    @Field(() => RoutineCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RoutineCreateManyUserInputEnvelope)
    createMany?: RoutineCreateManyUserInputEnvelope;

    @Field(() => [RoutineWhereUniqueInput], {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    connect?: Array<RoutineWhereUniqueInput>;
}
