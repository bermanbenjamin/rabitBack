import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class UserSettingsWhereInput {

    @Field(() => [UserSettingsWhereInput], {nullable:true})
    AND?: Array<UserSettingsWhereInput>;

    @Field(() => [UserSettingsWhereInput], {nullable:true})
    OR?: Array<UserSettingsWhereInput>;

    @Field(() => [UserSettingsWhereInput], {nullable:true})
    NOT?: Array<UserSettingsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    isOnVacation?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isWithoutAlarms?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    weekStartsOn?: IntFilter;
}
