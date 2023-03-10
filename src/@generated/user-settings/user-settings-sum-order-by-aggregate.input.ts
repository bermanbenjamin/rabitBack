import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSettingsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    weekStartsOn?: keyof typeof SortOrder;
}
