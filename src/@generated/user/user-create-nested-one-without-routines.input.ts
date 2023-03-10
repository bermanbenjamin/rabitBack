import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRoutinesInput } from './user-create-without-routines.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRoutinesInput } from './user-create-or-connect-without-routines.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRoutinesInput {

    @Field(() => UserCreateWithoutRoutinesInput, {nullable:true})
    @Type(() => UserCreateWithoutRoutinesInput)
    create?: UserCreateWithoutRoutinesInput;

    @Field(() => UserCreateOrConnectWithoutRoutinesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoutinesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
