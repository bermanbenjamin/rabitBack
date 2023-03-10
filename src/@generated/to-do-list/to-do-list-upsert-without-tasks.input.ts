import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListUpdateWithoutTasksInput } from './to-do-list-update-without-tasks.input';
import { Type } from 'class-transformer';
import { ToDoListCreateWithoutTasksInput } from './to-do-list-create-without-tasks.input';

@InputType()
export class ToDoListUpsertWithoutTasksInput {

    @Field(() => ToDoListUpdateWithoutTasksInput, {nullable:false})
    @Type(() => ToDoListUpdateWithoutTasksInput)
    update!: ToDoListUpdateWithoutTasksInput;

    @Field(() => ToDoListCreateWithoutTasksInput, {nullable:false})
    @Type(() => ToDoListCreateWithoutTasksInput)
    create!: ToDoListCreateWithoutTasksInput;
}
