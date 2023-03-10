import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToDosInput } from './user-create-without-to-dos.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutToDosInput } from './user-create-or-connect-without-to-dos.input';
import { UserUpsertWithoutToDosInput } from './user-upsert-without-to-dos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutToDosInput } from './user-update-without-to-dos.input';

@InputType()
export class UserUpdateOneWithoutToDosNestedInput {

    @Field(() => UserCreateWithoutToDosInput, {nullable:true})
    @Type(() => UserCreateWithoutToDosInput)
    create?: UserCreateWithoutToDosInput;

    @Field(() => UserCreateOrConnectWithoutToDosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutToDosInput)
    connectOrCreate?: UserCreateOrConnectWithoutToDosInput;

    @Field(() => UserUpsertWithoutToDosInput, {nullable:true})
    @Type(() => UserUpsertWithoutToDosInput)
    upsert?: UserUpsertWithoutToDosInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutToDosInput, {nullable:true})
    @Type(() => UserUpdateWithoutToDosInput)
    update?: UserUpdateWithoutToDosInput;
}
