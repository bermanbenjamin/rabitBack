import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class UserSettingsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    isOnVacation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isWithoutAlarms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStartsOn?: keyof typeof SortOrder;
}
