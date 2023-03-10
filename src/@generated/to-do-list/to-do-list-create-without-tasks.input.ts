import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutToDosInput } from '../user/user-create-nested-one-without-to-dos.input';

@InputType()
export class ToDoListCreateWithoutTasksInput {

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

    @Field(() => UserCreateNestedOneWithoutToDosInput, {nullable:true})
    user?: UserCreateNestedOneWithoutToDosInput;
}
