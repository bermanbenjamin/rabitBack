import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ToDoTaskListRelationFilter } from '../to-do-task/to-do-task-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ToDoListWhereInput {

    @Field(() => [ToDoListWhereInput], {nullable:true})
    AND?: Array<ToDoListWhereInput>;

    @Field(() => [ToDoListWhereInput], {nullable:true})
    OR?: Array<ToDoListWhereInput>;

    @Field(() => [ToDoListWhereInput], {nullable:true})
    NOT?: Array<ToDoListWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => ToDoTaskListRelationFilter, {nullable:true})
    tasks?: ToDoTaskListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
