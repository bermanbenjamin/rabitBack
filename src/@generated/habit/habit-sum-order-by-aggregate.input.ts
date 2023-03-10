import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    frequencyPerDay?: keyof typeof SortOrder;
}
