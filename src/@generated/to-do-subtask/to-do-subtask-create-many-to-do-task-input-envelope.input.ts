import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskCreateManyToDoTaskInput } from './to-do-subtask-create-many-to-do-task.input';
import { Type } from 'class-transformer';

@InputType()
export class ToDoSubtaskCreateManyToDoTaskInputEnvelope {

    @Field(() => [ToDoSubtaskCreateManyToDoTaskInput], {nullable:false})
    @Type(() => ToDoSubtaskCreateManyToDoTaskInput)
    data!: Array<ToDoSubtaskCreateManyToDoTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
