import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSettingsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isOnVacation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isWithoutAlarms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStartsOn?: keyof typeof SortOrder;
}
