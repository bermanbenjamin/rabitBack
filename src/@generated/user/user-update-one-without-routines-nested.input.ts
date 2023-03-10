import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRoutinesInput } from './user-create-without-routines.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRoutinesInput } from './user-create-or-connect-without-routines.input';
import { UserUpsertWithoutRoutinesInput } from './user-upsert-without-routines.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRoutinesInput } from './user-update-without-routines.input';

@InputType()
export class UserUpdateOneWithoutRoutinesNestedInput {

    @Field(() => UserCreateWithoutRoutinesInput, {nullable:true})
    @Type(() => UserCreateWithoutRoutinesInput)
    create?: UserCreateWithoutRoutinesInput;

    @Field(() => UserCreateOrConnectWithoutRoutinesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRoutinesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput;

    @Field(() => UserUpsertWithoutRoutinesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRoutinesInput)
    upsert?: UserUpsertWithoutRoutinesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRoutinesInput, {nullable:true})
    @Type(() => UserUpdateWithoutRoutinesInput)
    update?: UserUpdateWithoutRoutinesInput;
}
