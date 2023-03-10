import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitOrderByWithRelationInput } from '../habit/habit-order-by-with-relation.input';

@InputType()
export class HabitTimerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => HabitOrderByWithRelationInput, {nullable:true})
    habit?: HabitOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;
}
