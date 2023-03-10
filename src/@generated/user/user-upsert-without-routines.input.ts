import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRoutinesInput } from './user-update-without-routines.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRoutinesInput } from './user-create-without-routines.input';

@InputType()
export class UserUpsertWithoutRoutinesInput {

    @Field(() => UserUpdateWithoutRoutinesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRoutinesInput)
    update!: UserUpdateWithoutRoutinesInput;

    @Field(() => UserCreateWithoutRoutinesInput, {nullable:false})
    @Type(() => UserCreateWithoutRoutinesInput)
    create!: UserCreateWithoutRoutinesInput;
}
