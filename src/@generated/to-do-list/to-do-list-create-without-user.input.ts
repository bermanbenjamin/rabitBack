import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateNestedManyWithoutToDoListInput } from '../to-do-task/to-do-task-create-nested-many-without-to-do-list.input';

@InputType()
export class ToDoListCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => ToDoTaskCreateNestedManyWithoutToDoListInput, {nullable:true})
    tasks?: ToDoTaskCreateNestedManyWithoutToDoListInput;
}
