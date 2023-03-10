import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskScalarWhereInput } from './to-do-task-scalar-where.input';
import { Type } from 'class-transformer';
import { ToDoTaskUpdateManyMutationInput } from './to-do-task-update-many-mutation.input';

@InputType()
export class ToDoTaskUpdateManyWithWhereWithoutToDoListInput {

    @Field(() => ToDoTaskScalarWhereInput, {nullable:false})
    @Type(() => ToDoTaskScalarWhereInput)
    where!: ToDoTaskScalarWhereInput;

    @Field(() => ToDoTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoTaskUpdateManyMutationInput)
    data!: ToDoTaskUpdateManyMutationInput;
}
