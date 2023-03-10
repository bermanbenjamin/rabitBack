import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingsCreateManyInput } from './user-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserSettingsArgs {

    @Field(() => [UserSettingsCreateManyInput], {nullable:false})
    @Type(() => UserSettingsCreateManyInput)
    data!: Array<UserSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
