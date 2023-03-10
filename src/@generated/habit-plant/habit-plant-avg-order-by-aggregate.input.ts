import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitPlantAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    positionBot?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    positionLeft?: keyof typeof SortOrder;
}
