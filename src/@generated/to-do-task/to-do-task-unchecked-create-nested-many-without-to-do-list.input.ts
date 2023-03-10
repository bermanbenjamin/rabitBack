import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateWithoutToDoListInput } from './to-do-task-create-without-to-do-list.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateOrConnectWithoutToDoListInput } from './to-do-task-create-or-connect-without-to-do-list.input';
import { ToDoTaskCreateManyToDoListInputEnvelope } from './to-do-task-create-many-to-do-list-input-envelope.input';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';

@InputType()
export class ToDoTaskUncheckedCreateNestedManyWithoutToDoListInput {

    @Field(() => [ToDoTaskCreateWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskCreateWithoutToDoListInput)
    create?: Array<ToDoTaskCreateWithoutToDoListInput>;

    @Field(() => [ToDoTaskCreateOrConnectWithoutToDoListInput], {nullable:true})
    @Type(() => ToDoTaskCreateOrConnectWithoutToDoListInput)
    connectOrCreate?: Array<ToDoTaskCreateOrConnectWithoutToDoListInput>;

    @Field(() => ToDoTaskCreateManyToDoListInputEnvelope, {nullable:true})
    @Type(() => ToDoTaskCreateManyToDoListInputEnvelope)
    createMany?: ToDoTaskCreateManyToDoListInputEnvelope;

    @Field(() => [ToDoTaskWhereUniqueInput], {nullable:true})
    @Type(() => ToDoTaskWhereUniqueInput)
    connect?: Array<ToDoTaskWhereUniqueInput>;
}
