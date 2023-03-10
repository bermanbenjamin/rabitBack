import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ToDoSubtaskScalarWhereWithAggregatesInput {

    @Field(() => [ToDoSubtaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ToDoSubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [ToDoSubtaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ToDoSubtaskScalarWhereWithAggregatesInput>;

    @Field(() => [ToDoSubtaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ToDoSubtaskScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    toDoTaskId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isDone?: BoolWithAggregatesFilter;
}
