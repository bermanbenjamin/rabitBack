import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoListUpdateWithoutUserInput } from './to-do-list-update-without-user.input';
import { ToDoListCreateWithoutUserInput } from './to-do-list-create-without-user.input';

@InputType()
export class ToDoListUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;

    @Field(() => ToDoListUpdateWithoutUserInput, {nullable:false})
    @Type(() => ToDoListUpdateWithoutUserInput)
    update!: ToDoListUpdateWithoutUserInput;

    @Field(() => ToDoListCreateWithoutUserInput, {nullable:false})
    @Type(() => ToDoListCreateWithoutUserInput)
    create!: ToDoListCreateWithoutUserInput;
}
