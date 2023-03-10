import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutToDoListInput } from './to-do-task-create-without-to-do-list.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateOrConnectWithoutToDoListInput } from './to-do-task-create-or-connect-without-to-do-list.input';
import { ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput } from './to-do-task-upsert-with-where-unique-without-to-do-list.input';
import { ToDoTaskCreateManyToDoListInputEnvelope } from './to-do-task-create-many-to-do-list-input-envelope.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput } from './to-do-task-update-with-where-unique-without-to-do-list.input';
import { ToDoTaskUpdateManyWithWhereWithoutToDoListInput } from './to-do-task-update-many-with-where-without-to-do-list.input';
import { ToDoTaskScalarWhereInput } from './to-do-task-scalar-where.input';

@InputType()
export class ToDoTaskUpdateManyWithoutToDoListNestedInput {

    @Field(() => [ToDoTaskCreateWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskCreateWithoutToDoListInput)
    create?: Array<ToDoTaskCreateWithoutToDoListInput>;

    @Field(() => [ToDoTaskCreateOrConnectWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskCreateOrConnectWithoutToDoListInput)
    connectOrCreate?: Array<ToDoTaskCreateOrConnectWithoutToDoListInput>;

    @Field(() => [ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput)
    upsert?: Array<ToDoTaskUpsertWithWhereUniqueWithoutToDoListInput>;

    @Field(() => ToDoTaskCreateManyToDoListInputEnvelope, {nullable:true})
    @Type(() => ToDoTaskCreateManyToDoListInputEnvelope)
    createMany?: ToDoTaskCreateManyToDoListInputEnvelope;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    set?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    disconnect?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    delete?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    connect?: Array<ToDoTaskWhereUniqueInput>;

    @Field(() => [ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput)
    update?: Array<ToDoTaskUpdateWithWhereUniqueWithoutToDoListInput>;

    @Field(() => [ToDoTaskUpdateManyWithWhereWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskUpdateManyWithWhereWithoutToDoListInput)
    updateMany?: Array<ToDoTaskUpdateManyWithWhereWithoutToDoListInput>;

    @Field(() => [ToDoTaskScalarWhereInput], {nullable:true})
    @Type(() => ToDoTaskScalarWhereInput)
    deleteMany?: Array<ToDoTaskScalarWhereInput>;
}
