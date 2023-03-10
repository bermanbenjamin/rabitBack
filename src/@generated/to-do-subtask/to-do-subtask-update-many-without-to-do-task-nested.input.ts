import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskCreateWithoutToDoTaskInput } from './to-do-subtask-create-without-to-do-task.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskCreateOrConnectWithoutToDoTaskInput } from './to-do-subtask-create-or-connect-without-to-do-task.input';
import { ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput } from './to-do-subtask-upsert-with-where-unique-without-to-do-task.input';
import { ToDoSubtaskCreateManyToDoTaskInputEnvelope } from './to-do-subtask-create-many-to-do-task-input-envelope.input';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput } from './to-do-subtask-update-with-where-unique-without-to-do-task.input';
import { ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput } from './to-do-subtask-update-many-with-where-without-to-do-task.input';
import { ToDoSubtaskScalarWhereInput } from './to-do-subtask-scalar-where.input';

@InputType()
export class ToDoSubtaskUpdateManyWithoutToDoTaskNestedInput {

    @Field(() => [ToDoSubtaskCreateWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskCreateWithoutToDoTaskInput)
    create?: Array<ToDoSubtaskCreateWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskCreateOrConnectWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskCreateOrConnectWithoutToDoTaskInput)
    connectOrCreate?: Array<ToDoSubtaskCreateOrConnectWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput)
    upsert?: Array<ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput>;

    @Field(() => ToDoSubtaskCreateManyToDoTaskInputEnvelope, {nullable:true})
    @Type(() => ToDoSubtaskCreateManyToDoTaskInputEnvelope)
    createMany?: ToDoSubtaskCreateManyToDoTaskInputEnvelope;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    set?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    disconnect?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    delete?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    connect?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput)
    update?: Array<ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput], {nullable:true})
    @Type(() => ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput)
    updateMany?: Array<ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskScalarWhereInput], {nullable:true})
    @Type(() => ToDoSubtaskScalarWhereInput)
    deleteMany?: Array<ToDoSubtaskScalarWhereInput>;
}
