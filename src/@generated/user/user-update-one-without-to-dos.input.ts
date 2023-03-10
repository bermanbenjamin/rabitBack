import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToDosInput } from './user-create-without-to-dos.input';
import { UserCreateOrConnectWithoutToDosInput } from './user-create-or-connect-without-to-dos.input';
import { UserUpsertWithoutToDosInput } from './user-upsert-without-to-dos.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutToDosInput } from './user-update-without-to-dos.input';

@InputType()
export class UserUpdateOneWithoutToDosInput {

    @Field(() => UserCreateWithoutToDosInput, {nullable:true})
    create?: UserCreateWithoutToDosInput;

    @Field(() => UserCreateOrConnectWithoutToDosInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutToDosInput;

    @Field(() => UserUpsertWithoutToDosInput, {nullable:true})
    upsert?: UserUpsertWithoutToDosInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutToDosInput, {nullable:true})
    update?: UserUpdateWithoutToDosInput;
}
