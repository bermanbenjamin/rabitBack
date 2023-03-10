import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListUpdateManyMutationInput } from './to-do-list-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ToDoListWhereInput } from './to-do-list-where.input';

@ArgsType()
export class UpdateManyToDoListArgs {

    @Field(() => ToDoListUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoListUpdateManyMutationInput)
    data!: ToDoListUpdateManyMutationInput;

    @Field(() => ToDoListWhereInput, {nullable:true})
    @Type(() => ToDoListWhereInput)
    where?: ToDoListWhereInput;
}
