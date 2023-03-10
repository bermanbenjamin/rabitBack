import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoSubtaskCreateWithoutToDoTaskInput } from './to-do-subtask-create-without-to-do-task.input';
import { ToDoSubtaskCreateOrConnectWithoutToDoTaskInput } from './to-do-subtask-create-or-connect-without-to-do-task.input';
import { ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput } from './to-do-subtask-upsert-with-where-unique-without-to-do-task.input';
import { ToDoSubtaskCreateManyToDoTaskInputEnvelope } from './to-do-subtask-create-many-to-do-task-input-envelope.input';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput } from './to-do-subtask-update-with-where-unique-without-to-do-task.input';
import { ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput } from './to-do-subtask-update-many-with-where-without-to-do-task.input';
import { ToDoSubtaskScalarWhereInput } from './to-do-subtask-scalar-where.input';

@InputType()
export class ToDoSubtaskUncheckedUpdateManyWithoutToDoTaskInput {

    @Field(() => [ToDoSubtaskCreateWithoutToDoTaskInput], {nullable:true})
    create?: Array<ToDoSubtaskCreateWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskCreateOrConnectWithoutToDoTaskInput], {nullable:true})
    connectOrCreate?: Array<ToDoSubtaskCreateOrConnectWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput], {nullable:true})
    upsert?: Array<ToDoSubtaskUpsertWithWhereUniqueWithoutToDoTaskInput>;

    @Field(() => ToDoSubtaskCreateManyToDoTaskInputEnvelope, {nullable:true})
    createMany?: ToDoSubtaskCreateManyToDoTaskInputEnvelope;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    set?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    delete?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskWhereUniqueInput], {nullable:true})
    connect?: Array<ToDoSubtaskWhereUniqueInput>;

    @Field(() => [ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput], {nullable:true})
    update?: Array<ToDoSubtaskUpdateWithWhereUniqueWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput], {nullable:true})
    updateMany?: Array<ToDoSubtaskUpdateManyWithWhereWithoutToDoTaskInput>;

    @Field(() => [ToDoSubtaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToDoSubtaskScalarWhereInput>;
}
