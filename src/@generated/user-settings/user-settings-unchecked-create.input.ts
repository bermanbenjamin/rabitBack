import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedOneWithoutUserSettingsInput } from '../user/user-unchecked-create-nested-one-without-user-settings.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSettingsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserUncheckedCreateNestedOneWithoutUserSettingsInput, {nullable:true})
    user?: UserUncheckedCreateNestedOneWithoutUserSettingsInput;

    @Field(() => Boolean, {nullable:true})
    isOnVacation?: boolean;

    @Field(() => Boolean, {nullable:true})
    isWithoutAlarms?: boolean;

    @Field(() => Int, {nullable:true})
    weekStartsOn?: number;
}
