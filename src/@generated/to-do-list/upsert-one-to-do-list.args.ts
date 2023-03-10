import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoListCreateInput } from './to-do-list-create.input';
import { ToDoListUpdateInput } from './to-do-list-update.input';

@ArgsType()
export class UpsertOneToDoListArgs {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;

    @Field(() => ToDoListCreateInput, {nullable:false})
    @Type(() => ToDoListCreateInput)
    create!: ToDoListCreateInput;

    @Field(() => ToDoListUpdateInput, {nullable:false})
    @Type(() => ToDoListUpdateInput)
    update!: ToDoListUpdateInput;
}
