import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoListCreateWithoutUserInput } from './to-do-list-create-without-user.input';

@InputType()
export class ToDoListCreateOrConnectWithoutUserInput {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;

    @Field(() => ToDoListCreateWithoutUserInput, {nullable:false})
    @Type(() => ToDoListCreateWithoutUserInput)
    create!: ToDoListCreateWithoutUserInput;
}
