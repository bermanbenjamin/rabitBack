import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToDosInput } from './user-create-without-to-dos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutToDosInput } from './user-create-or-connect-without-to-dos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutToDosInput {

    @Field(() => UserCreateWithoutToDosInput, {nullable:true})
    @Type(() => UserCreateWithoutToDosInput)
    create?: UserCreateWithoutToDosInput;

    @Field(() => UserCreateOrConnectWithoutToDosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutToDosInput)
    connectOrCreate?: UserCreateOrConnectWithoutToDosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
