import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSettingsCountOrderByAggregateInput } from './user-settings-count-order-by-aggregate.input';
import { UserSettingsAvgOrderByAggregateInput } from './user-settings-avg-order-by-aggregate.input';
import { UserSettingsMaxOrderByAggregateInput } from './user-settings-max-order-by-aggregate.input';
import { UserSettingsMinOrderByAggregateInput } from './user-settings-min-order-by-aggregate.input';
import { UserSettingsSumOrderByAggregateInput } from './user-settings-sum-order-by-aggregate.input';

@InputType()
export class UserSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isOnVacation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isWithoutAlarms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStartsOn?: keyof typeof SortOrder;

    @Field(() => UserSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: UserSettingsCountOrderByAggregateInput;

    @Field(() => UserSettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserSettingsAvgOrderByAggregateInput;

    @Field(() => UserSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserSettingsMaxOrderByAggregateInput;

    @Field(() => UserSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: UserSettingsMinOrderByAggregateInput;

    @Field(() => UserSettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSettingsSumOrderByAggregateInput;
}
