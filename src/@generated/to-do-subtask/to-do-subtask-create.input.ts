import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateNestedOneWithoutSubTasksInput } from '../to-do-task/to-do-task-create-nested-one-without-sub-tasks.input';

@InputType()
export class ToDoSubtaskCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ToDoTaskCreateNestedOneWithoutSubTasksInput, {nullable:false})
    toDoTask!: ToDoTaskCreateNestedOneWithoutSubTasksInput;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    isDone?: boolean;
}
