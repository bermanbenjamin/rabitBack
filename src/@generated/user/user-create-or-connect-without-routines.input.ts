import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRoutinesInput } from './user-create-without-routines.input';

@InputType()
export class UserCreateOrConnectWithoutRoutinesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRoutinesInput, {nullable:false})
    @Type(() => UserCreateWithoutRoutinesInput)
    create!: UserCreateWithoutRoutinesInput;
}
