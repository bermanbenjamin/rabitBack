import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';
import { Type } from 'class-transformer';
import { ToDoListOrderByWithRelationInput } from './to-do-list-order-by-with-relation.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToDoListScalarFieldEnum } from './to-do-list-scalar-field.enum';

@ArgsType()
export class FindFirstToDoListArgs {

    @Field(() => ToDoListWhereInput, {nullable:true})
    @Type(() => ToDoListWhereInput)
    where?: ToDoListWhereInput;

    @Field(() => [ToDoListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToDoListOrderByWithRelationInput>;

    @Field(() => ToDoListWhereUniqueInput, {nullable:true})
    cursor?: ToDoListWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToDoListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToDoListScalarFieldEnum>;
}
