import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ToDoSubtaskScalarWhereInput {

    @Field(() => [ToDoSubtaskScalarWhereInput], {nullable:true})
    AND?: Array<ToDoSubtaskScalarWhereInput>;

    @Field(() => [ToDoSubtaskScalarWhereInput], {nullable:true})
    OR?: Array<ToDoSubtaskScalarWhereInput>;

    @Field(() => [ToDoSubtaskScalarWhereInput], {nullable:true})
    NOT?: Array<ToDoSubtaskScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    toDoTaskId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDone?: BoolFilter;
}
