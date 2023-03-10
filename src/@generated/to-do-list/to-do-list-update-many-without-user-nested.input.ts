import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateWithoutUserInput } from './to-do-list-create-without-user.input';
import { Type } from 'class-transformer';
import { ToDoListCreateOrConnectWithoutUserInput } from './to-do-list-create-or-connect-without-user.input';
import { ToDoListUpsertWithWhereUniqueWithoutUserInput } from './to-do-list-upsert-with-where-unique-without-user.input';
import { ToDoListCreateManyUserInputEnvelope } from './to-do-list-create-many-user-input-envelope.input';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { ToDoListUpdateWithWhereUniqueWithoutUserInput } from './to-do-list-update-with-where-unique-without-user.input';
import { ToDoListUpdateManyWithWhereWithoutUserInput } from './to-do-list-update-many-with-where-without-user.input';
import { ToDoListScalarWhereInput } from './to-do-list-scalar-where.input';

@InputType()
export class ToDoListUpdateManyWithoutUserNestedInput {

    @Field(() => [ToDoListCreateWithoutUserInput], {nullable:true})
    @Type(() => ToDoListCreateWithoutUserInput)
    create?: Array<ToDoListCreateWithoutUserInput>;

    @Field(() => [ToDoListCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ToDoListCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ToDoListCreateOrConnectWithoutUserInput>;

    @Field(() => [ToDoListUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ToDoListUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ToDoListUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ToDoListCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ToDoListCreateManyUserInputEnvelope)
    createMany?: ToDoListCreateManyUserInputEnvelope;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    set?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    disconnect?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    delete?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListWhereUniqueInput], {nullable:true})
    @Type(() => ToDoListWhereUniqueInput)
    connect?: Array<ToDoListWhereUniqueInput>;

    @Field(() => [ToDoListUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ToDoListUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ToDoListUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ToDoListUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ToDoListUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ToDoListUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ToDoListScalarWhereInput], {nullable:true})
    @Type(() => ToDoListScalarWhereInput)
    deleteMany?: Array<ToDoListScalarWhereInput>;
}
