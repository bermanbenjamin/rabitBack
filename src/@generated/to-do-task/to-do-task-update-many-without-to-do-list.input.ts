import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutToDoListInput } from './to-do-task-create-without-to-do-list.input';
import { ToDoTaskCreateOrConnectWithoutToDoListInput } from './to-do-task-create-or-connect-without-to-do-list.input';
import { ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput } from './to-do-task-upsert-with-where-unique-without-to-do-list.input';
import { ToDoTaskCreateManyToDoListInputEnvelope } from './to-do-task-create-many-to-do-list-input-envelope.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput } from './to-do-task-update-with-where-unique-without-to-do-list.input';
import { ToDoTaskUpdateManyWithWhereWithoutToDoListInput } from './to-do-task-update-many-with-where-without-to-do-list.input';
import { ToDoTaskScalarWhereInput } from './to-do-task-scalar-where.input';

@InputType()
export class ToDoTaskUpdateManyWithoutToDoListInput {

    @Field(() => [ToDoTaskCreateWithoutToDoListInput], {nullable:true})
    create?: Array<ToDoTaskCreateWithoutToDoListInput>;

    @Field(() => [ToDoTaskCreateOrConnectWithoutToDoListInput], {nullable:true})
    connectOrCreate?: Array<ToDoTaskCreateOrConnectWithoutToDoListInput>;

    @Field(() => [ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput], {nullable:true})
    upsert?: Array<ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput>;

    @Field(() => ToDoTaskCreateManyToDoListInputEnvelope, {nullable:true})
    createMany?: ToDoTaskCreateManyToDoListInputEnvelope;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    set?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    delete?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    connect?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput], {nullable:true})
    update?: Array<ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput>;

    @Field(() => [ToDoTaskUpdateManyWithWhereWithoutToDoListInput], {nullable:true})
    updateMany?: Array<ToDoTaskUpdateManyWithWhereWithoutToDoListInput>;

    @Field(() => [ToDoTaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToDoTaskScalarWhereInput>;
}
