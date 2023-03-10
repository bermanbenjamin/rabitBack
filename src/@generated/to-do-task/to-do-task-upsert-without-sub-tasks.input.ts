import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskUpdateWithoutSubTasksInput } from './to-do-task-update-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateWithoutSubTasksInput } from './to-do-task-create-without-sub-tasks.input';

@InputType()
export class ToDoTaskUpsertWithoutSubTasksInput {

    @Field(() => ToDoTaskUpdateWithoutSubTasksInput, {nullable:false})
    @Type(() => ToDoTaskUpdateWithoutSubTasksInput)
    update!: ToDoTaskUpdateWithoutSubTasksInput;

    @Field(() => ToDoTaskCreateWithoutSubTasksInput, {nullable:false})
    @Type(() => ToDoTaskCreateWithoutSubTasksInput)
    create!: ToDoTaskCreateWithoutSubTasksInput;
}
