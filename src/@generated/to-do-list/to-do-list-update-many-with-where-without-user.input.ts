import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListScalarWhereInput } from './to-do-list-scalar-where.input';
import { Type } from 'class-transformer';
import { ToDoListUpdateManyMutationInput } from './to-do-list-update-many-mutation.input';

@InputType()
export class ToDoListUpdateManyWithWhereWithoutUserInput {

    @Field(() => ToDoListScalarWhereInput, {nullable:false})
    @Type(() => ToDoListScalarWhereInput)
    where!: ToDoListScalarWhereInput;

    @Field(() => ToDoListUpdateManyMutationInput, {nullable:false})
    @Type(() => ToDoListUpdateManyMutationInput)
    data!: ToDoListUpdateManyMutationInput;
}
