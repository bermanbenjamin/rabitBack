import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyToDoSubtaskArgs {

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    @Type(() => ToDoSubtaskWhereInput)
    where?: ToDoSubtaskWhereInput;
}
