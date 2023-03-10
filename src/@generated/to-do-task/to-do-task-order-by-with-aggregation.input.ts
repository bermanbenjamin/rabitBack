import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToDoTaskCountOrderByAggregateInput } from './to-do-task-count-order-by-aggregate.input';
import { ToDoTaskAvgOrderByAggregateInput } from './to-do-task-avg-order-by-aggregate.input';
import { ToDoTaskMaxOrderByAggregateInput } from './to-do-task-max-order-by-aggregate.input';
import { ToDoTaskMinOrderByAggregateInput } from './to-do-task-min-order-by-aggregate.input';
import { ToDoTaskSumOrderByAggregateInput } from './to-do-task-sum-order-by-aggregate.input';

@InputType()
export class ToDoTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    toDoListId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastDone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    frequenciesByRepeatType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysOfWeek?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    repeatType?: keyof typeof SortOrder;

    @Field(() => ToDoTaskCountOrderByAggregateInput, {nullable:true})
    _count?: ToDoTaskCountOrderByAggregateInput;

    @Field(() => ToDoTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: ToDoTaskAvgOrderByAggregateInput;

    @Field(() => ToDoTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: ToDoTaskMaxOrderByAggregateInput;

    @Field(() => ToDoTaskMinOrderByAggregateInput, {nullable:true})
    _min?: ToDoTaskMinOrderByAggregateInput;

    @Field(() => ToDoTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: ToDoTaskSumOrderByAggregateInput;
}
