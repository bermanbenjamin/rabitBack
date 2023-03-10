import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskUpdateManyMutationInput } from './to-do-task-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ToDoTaskWhereInput } from './to-do-task-where.input';

@ArgsType()
export class UpdateManyToDoTaskArgs {

    @Field(() => ToDoTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoTaskUpdateManyMutationInput)
    data!: ToDoTaskUpdateManyMutationInput;

    @Field(() => ToDoTaskWhereInput, {nullable:true})
    @Type(() => ToDoTaskWhereInput)
    where?: ToDoTaskWhereInput;
}
