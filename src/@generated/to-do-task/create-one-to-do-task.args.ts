import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskCreateInput } from './to-do-task-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToDoTaskArgs {

    @Field(() => ToDoTaskCreateInput, {nullable:false})
    @Type(() => ToDoTaskCreateInput)
    data!: ToDoTaskCreateInput;
}
