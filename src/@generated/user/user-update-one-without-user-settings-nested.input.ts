import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSettingsInput } from './user-create-without-user-settings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSettingsInput } from './user-create-or-connect-without-user-settings.input';
import { UserUpsertWithoutUserSettingsInput } from './user-upsert-without-user-settings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserSettingsInput } from './user-update-without-user-settings.input';

@InputType()
export class UserUpdateOneWithoutUserSettingsNestedInput {

    @Field(() => UserCreateWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserSettingsInput)
    create?: UserCreateWithoutUserSettingsInput;

    @Field(() => UserCreateOrConnectWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserSettingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput;

    @Field(() => UserUpsertWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserSettingsInput)
    upsert?: UserUpsertWithoutUserSettingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserSettingsInput)
    update?: UserUpdateWithoutUserSettingsInput;
}
