import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutToDosInput } from './user-create-without-to-dos.input';

@InputType()
export class UserCreateOrConnectWithoutToDosInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutToDosInput, {nullable:false})
    @Type(() => UserCreateWithoutToDosInput)
    create!: UserCreateWithoutToDosInput;
}
