import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HabitOrderByWithRelationInput } from '../habit/habit-order-by-with-relation.input';

@InputType()
export class HabitReminderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => HabitOrderByWithRelationInput, {nullable:true})
    Habit?: HabitOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    habitId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAlarm?: keyof typeof SortOrder;
}
