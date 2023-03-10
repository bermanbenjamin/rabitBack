import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class UserSettingsScalarWhereWithAggregatesInput {

    @Field(() => [UserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [UserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [UserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isOnVacation?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isWithoutAlarms?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weekStartsOn?: IntWithAggregatesFilter;
}
