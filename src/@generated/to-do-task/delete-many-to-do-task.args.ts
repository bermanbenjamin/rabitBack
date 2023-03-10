import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereInput } from './to-do-task-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyToDoTaskArgs {

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    @Type(() => ToDoTaskWhereInput)
    where?: ToDoTaskWhereInput;
}
