import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskOrderByWithRelationInput } from './to-do-subtask-order-by-with-relation.input';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoSubtaskScalarFieldEnum } from './to-do-subtask-scalar-field.enum';

@ArgsType()
export class FindManyToDoSubtaskArgs {

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    @Type(() => ToDoSubtaskWhereInput)
    where?: ToDoSubtaskWhereInput;

    @Field(() => [ToDoSubtaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoSubtaskOrderByWithRelationInput>;

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:true})
    cursor?: ToDoSubtaskWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToDoSubtaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToDoSubtaskScalarFieldEnum>;
}
