import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ToDoTaskAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    frequenciesByRepeatType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;
}
