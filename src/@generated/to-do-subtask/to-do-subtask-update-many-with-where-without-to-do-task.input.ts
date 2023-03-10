import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskScalarWhereInput } from './to-do-subtask-scalar-where.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskUpdateManyMutationInput } from './to-do-subtask-update-many-mutation.input';

@InputType()
export class ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput {

    @Field(() => ToDoSubtaskScalarWhereInput, {nullable:false})
    @Type(() => ToDoSubtaskScalarWhereInput)
    where!: ToDoSubtaskScalarWhereInput;

    @Field(() => ToDoSubtaskUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoSubtaskUpdateManyMutationInput)
    data!: ToDoSubtaskUpdateManyMutationInput;
}
