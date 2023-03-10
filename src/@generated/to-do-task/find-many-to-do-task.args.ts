import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';
import { Type } from 'class-transformer';
import { ToDoTaskOrderByWithRelationInput } from './to-do-task-order-by-with-relation.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoTaskScalarFieldEnum } from './to-do-task-scalar-field.enum';

@ArgsType()
export class FindManyToDoTaskArgs {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    @Type(() => ToDoTaskWhereInput)
    where?: ToDoTaskWhereInput;

    @Field(() => [ToDoTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoTaskOrderByWithRelationInput>;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:true})
    cursor?: ToDoTaskWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToDoTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToDoTaskScalarFieldEnum>;
}
