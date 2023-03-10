import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToDoSubtaskOrderByRelationAggregateInput } from '../to-do-subtask/to-do-subtask-order-by-relation-aggregate.input';
import { ToDoListOrderByWithRelationInput } from '../to-do-list/to-do-list-order-by-with-relation.input';

@InputType()
export class ToDoTaskOrderByWithRelationInput {

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

    @Field(() => ToDoSubtaskOrderByRelationAggregateInput, {nullable:true})
    subTasks?: ToDoSubtaskOrderByRelationAggregateInput;

    @Field(() => ToDoListOrderByWithRelationInput, {nullable:true})
    toDoList?: ToDoListOrderByWithRelationInput;
}
