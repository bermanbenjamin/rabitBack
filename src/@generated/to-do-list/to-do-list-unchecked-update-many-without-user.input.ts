import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutUserInput } from './to-do-list-create-without-user.input';
import { ToDoListCreateOrConnectWithoutUserInput } from './to-do-list-create-or-connect-without-user.input';
import { ToDoListUpsertWithWhereUniqueWithoutUserInput } from './to-do-list-upsert-with-where-unique-without-user.input';
import { ToDoListCreateManyUserInputEnvelope } from './to-do-list-create-many-user-input-envelope.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { ToDoListUpdateWithWhereUniqueWithoutUserInput } from './to-do-list-update-with-where-unique-without-user.input';
import { ToDoListUpdateManyWithWhereWithoutUserInput } from './to-do-list-update-many-with-where-without-user.input';
import { ToDoListScalarWhereInput } from './to-do-list-scalar-where.input';

@InputType()
export class ToDoListUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ToDoListCreateWithoutUserInput], {nullable:true})
    create?: Array<ToDoListCreateWithoutUserInput>;

    @Field(() => [ToDoListCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ToDoListCreateOrConnectWithoutUserInput>;

    @Field(() => [ToDoListUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ToDoListUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ToDoListCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ToDoListCreateManyUserInputEnvelope;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    set?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    disconnect?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    delete?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    connect?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ToDoListUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ToDoListUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ToDoListUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ToDoListScalarWhereInput], {nullable:true})
    deleteMany?: Array<ToDoListScalarWhereInput>;
}
