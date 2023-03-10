import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSettingsCountAggregate } from './user-settings-count-aggregate.output';
import { UserSettingsAvgAggregate } from './user-settings-avg-aggregate.output';
import { UserSettingsSumAggregate } from './user-settings-sum-aggregate.output';
import { UserSettingsMinAggregate } from './user-settings-min-aggregate.output';
import { UserSettingsMaxAggregate } from './user-settings-max-aggregate.output';

@ObjectType()
export class AggregateUserSettings {

    @Field(() => UserSettingsCountAggregate, {nullable:true})
    _count?: UserSettingsCountAggregate;

    @Field(() => UserSettingsAvgAggregate, {nullable:true})
    _avg?: UserSettingsAvgAggregate;

    @Field(() => UserSettingsSumAggregate, {nullable:true})
    _sum?: UserSettingsSumAggregate;

    @Field(() => UserSettingsMinAggregate, {nullable:true})
    _min?: UserSettingsMinAggregate;

    @Field(() => UserSettingsMaxAggregate, {nullable:true})
    _max?: UserSettingsMaxAggregate;
}
