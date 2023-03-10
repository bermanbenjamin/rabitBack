import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutToDosInput } from './user-update-without-to-dos.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutToDosInput } from './user-create-without-to-dos.input';

@InputType()
export class UserUpsertWithoutToDosInput {

    @Field(() => UserUpdateWithoutToDosInput, {nullable:false})
    @Type(() => UserUpdateWithoutToDosInput)
    update!: UserUpdateWithoutToDosInput;

    @Field(() => UserCreateWithoutToDosInput, {nullable:false})
    @Type(() => UserCreateWithoutToDosInput)
    create!: UserCreateWithoutToDosInput;
}
