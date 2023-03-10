import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskCreateInput } from './to-do-subtask-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToDoSubtaskArgs {

    @Field(() => ToDoSubtaskCreateInput, {nullable:false})
    @Type(() => ToDoSubtaskCreateInput)
    data!: ToDoSubtaskCreateInput;
}
