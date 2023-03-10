import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListUpdateInput } from './to-do-list-update.input';
import { Type } from 'class-transformer';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';

@ArgsType()
export class UpdateOneToDoListArgs {

    @Field(() => ToDoListUpdateInput, {nullable:false})
    @Type(() => ToDoListUpdateInput)
    data!: ToDoListUpdateInput;

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;
}
