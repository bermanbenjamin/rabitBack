import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitHistoryDayAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    frequencyOnThisDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    doneTimes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondsPerFrequency?: keyof typeof SortOrder;
}
