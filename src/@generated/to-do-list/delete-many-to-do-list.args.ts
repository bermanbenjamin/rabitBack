import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereInput } from './to-do-list-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyToDoListArgs {

    @Field(() => ToDoListWhereInput, {nullable:true})
    @Type(() => ToDoListWhereInput)
    where?: ToDoListWhereInput;
}
