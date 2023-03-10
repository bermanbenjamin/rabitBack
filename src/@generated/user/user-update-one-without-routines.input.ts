import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRoutinesInput } from './user-create-without-routines.input';
import { UserCreateOrConnectWithoutRoutinesInput } from './user-create-or-connect-without-routines.input';
import { UserUpsertWithoutRoutinesInput } from './user-upsert-without-routines.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRoutinesInput } from './user-update-without-routines.input';

@InputType()
export class UserUpdateOneWithoutRoutinesInput {

    @Field(() => UserCreateWithoutRoutinesInput, {nullable:true})
    create?: UserCreateWithoutRoutinesInput;

    @Field(() => UserCreateOrConnectWithoutRoutinesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput;

    @Field(() => UserUpsertWithoutRoutinesInput, {nullable:true})
    upsert?: UserUpsertWithoutRoutinesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRoutinesInput, {nullable:true})
    update?: UserUpdateWithoutRoutinesInput;
}
