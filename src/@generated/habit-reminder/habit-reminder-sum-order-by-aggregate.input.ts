import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitReminderSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    habitId?: keyof typeof SortOrder;
}
