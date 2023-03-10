import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSettingsInput } from './user-create-without-user-settings.input';

@InputType()
export class UserCreateOrConnectWithoutUserSettingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserSettingsInput)
    create!: UserCreateWithoutUserSettingsInput;
}
