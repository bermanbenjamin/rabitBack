import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserSettingsInput } from '../user/user-create-nested-one-without-user-settings.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSettingsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutUserSettingsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutUserSettingsInput;

    @Field(() => Boolean, {nullable:true})
    isOnVacation?: boolean;

    @Field(() => Boolean, {nullable:true})
    isWithoutAlarms?: boolean;

    @Field(() => Int, {nullable:true})
    weekStartsOn?: number;
}
