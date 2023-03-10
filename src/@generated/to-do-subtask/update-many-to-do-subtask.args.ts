import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskUpdateManyMutationInput } from './to-do-subtask-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskWhereInput } from './to-do-subtask-where.input';

@ArgsType()
export class UpdateManyToDoSubtaskArgs {

    @Field(() => ToDoSubtaskUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoSubtaskUpdateManyMutationInput)
    data!: ToDoSubtaskUpdateManyMutationInput;

    @Field(() => ToDoSubtaskWhereInput, {nullable:true})
    @Type(() => ToDoSubtaskWhereInput)
    where?: ToDoSubtaskWhereInput;
}
