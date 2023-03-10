import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskCreateWithoutToDoTaskInput } from './to-do-subtask-create-without-to-do-task.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskCreateOrConnectWithoutToDoTaskInput } from './to-do-subtask-create-or-connect-without-to-do-task.input';
import { ToDoSubtaskCreateManyToDoTaskInputEnvelope } from './to-do-subtask-create-many-to-do-task-input-envelope.input';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';

@InputType()
export class ToDoSubtaskCreateNestedManyWithoutToDoTaskInput {

    @Field(() => [ToDoSubtaskCreateWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskCreateWithoutToDoTaskInput)
    create?: Array<ToDoSubtaskCreateWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskCreateOrConnectWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskCreateOrConnectWithoutToDoTaskInput)
    connectOrCreate?: Array<ToDoSubtaskCreateOrConnectWithoutToDoTaskInput>;

    @Field(() => ToDoSubtaskCreateManyToDoTaskInputEnvelope, {nullable:true})
    @Type(() => ToDoSubtaskCreateManyToDoTaskInputEnvelope)
    createMany?: ToDoSubtaskCreateManyToDoTaskInputEnvelope;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    connect?: Array<ToDoSubtaskWhereUniqueInput>;
}
