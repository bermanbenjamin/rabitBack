import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserSettingsInput } from './user-update-without-user-settings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSettingsInput } from './user-create-without-user-settings.input';

@InputType()
export class UserUpsertWithoutUserSettingsInput {

    @Field(() => UserUpdateWithoutUserSettingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserSettingsInput)
    update!: UserUpdateWithoutUserSettingsInput;

    @Field(() => UserCreateWithoutUserSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserSettingsInput)
    create!: UserCreateWithoutUserSettingsInput;
}
