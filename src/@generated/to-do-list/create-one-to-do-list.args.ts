import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListCreateInput } from './to-do-list-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToDoListArgs {

    @Field(() => ToDoListCreateInput, {nullable:false})
    @Type(() => ToDoListCreateInput)
    data!: ToDoListCreateInput;
}
