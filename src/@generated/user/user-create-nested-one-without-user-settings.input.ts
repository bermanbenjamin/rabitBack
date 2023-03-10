import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSettingsInput } from './user-create-without-user-settings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSettingsInput } from './user-create-or-connect-without-user-settings.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserSettingsInput {

    @Field(() => UserCreateWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserSettingsInput)
    create?: UserCreateWithoutUserSettingsInput;

    @Field(() => UserCreateOrConnectWithoutUserSettingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserSettingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
