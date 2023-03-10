import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingsUpdateInput } from './user-settings-update.input';
import { Type } from 'class-transformer';
import { UserSettingsWhereUniqueInput } from './user-settings-where-unique.input';

@ArgsType()
export class UpdateOneUserSettingsArgs {

    @Field(() => UserSettingsUpdateInput, {nullable:false})
    @Type(() => UserSettingsUpdateInput)
    data!: UserSettingsUpdateInput;

    @Field(() => UserSettingsWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingsWhereUniqueInput)
    where!: UserSettingsWhereUniqueInput;
}
