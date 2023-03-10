import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutUserInput } from './to-do-list-create-without-user.input';
import { Type } from 'class-transformer';
import { ToDoListCreateOrConnectWithoutUserInput } from './to-do-list-create-or-connect-without-user.input';
import { ToDoListCreateManyUserInputEnvelope } from './to-do-list-create-many-user-input-envelope.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';

@InputType()
export class ToDoListUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ToDoListCreateWithoutUserInput], {nullable:true})
    @Type(() => ToDoListCreateWithoutUserInput)
    create?: Array<ToDoListCreateWithoutUserInput>;

    @Field(() => [ToDoListCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ToDoListCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ToDoListCreateOrConnectWithoutUserInput>;

    @Field(() => ToDoListCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ToDoListCreateManyUserInputEnvelope)
    createMany?: ToDoListCreateManyUserInputEnvelope;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    connect?: Array<ToDoListWhereUniqueInput>;
}
