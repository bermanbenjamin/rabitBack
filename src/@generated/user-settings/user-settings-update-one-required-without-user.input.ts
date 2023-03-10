import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingsCreateWithoutUserInput } from './user-settings-create-without-user.input';
import { UserSettingsCreateOrConnectWithoutUserInput } from './user-settings-create-or-connect-without-user.input';
import { UserSettingsUpsertWithoutUserInput } from './user-settings-upsert-without-user.input';
import { UserSettingsWhereUniqueInput } from './user-settings-where-unique.input';
import { UserSettingsUpdateWithoutUserInput } from './user-settings-update-without-user.input';

@InputType()
export class UserSettingsUpdateOneRequiredWithoutUserInput {

    @Field(() => UserSettingsCreateWithoutUserInput, {nullable:true})
    create?: UserSettingsCreateWithoutUserInput;

    @Field(() => UserSettingsCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput;

    @Field(() => UserSettingsUpsertWithoutUserInput, {nullable:true})
    upsert?: UserSettingsUpsertWithoutUserInput;

    @Field(() => UserSettingsWhereUniqueInput, {nullable:true})
    connect?: UserSettingsWhereUniqueInput;

    @Field(() => UserSettingsUpdateWithoutUserInput, {nullable:true})
    update?: UserSettingsUpdateWithoutUserInput;
}
