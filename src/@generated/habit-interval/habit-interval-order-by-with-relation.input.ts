import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitOrderByWithRelationInput } from '../habit/habit-order-by-with-relation.input';

@InputType()
export class HabitIntervalOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => HabitOrderByWithRelationInput, {nullable:true})
    Habit?: HabitOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    timesPerWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
}
