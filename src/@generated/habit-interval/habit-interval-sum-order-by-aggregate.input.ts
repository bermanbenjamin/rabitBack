import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitIntervalSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    timesPerWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;
}
