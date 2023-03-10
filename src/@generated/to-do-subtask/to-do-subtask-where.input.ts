import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ToDoTaskRelationFilter } from '../to-do-task/to-do-task-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ToDoSubtaskWhereInput {

    @Field(() => [ToDoSubtaskWhereInput], {nullable:true})
    AND?: Array<ToDoSubtaskWhereInput>;

    @Field(() => [ToDoSubtaskWhereInput], {nullable:true})
    OR?: Array<ToDoSubtaskWhereInput>;

    @Field(() => [ToDoSubtaskWhereInput], {nullable:true})
    NOT?: Array<ToDoSubtaskWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => ToDoTaskRelationFilter, {nullable:true})
    toDoTask?: ToDoTaskRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    toDoTaskId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDone?: BoolFilter;
}
