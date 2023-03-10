import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHabitsInput } from './user-create-without-habits.input';
import { UserCreateOrConnectWithoutHabitsInput } from './user-create-or-connect-without-habits.input';
import { UserUpsertWithoutHabitsInput } from './user-upsert-without-habits.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutHabitsInput } from './user-update-without-habits.input';

@InputType()
export class UserUpdateOneWithoutHabitsInput {

    @Field(() => UserCreateWithoutHabitsInput, {nullable:true})
    create?: UserCreateWithoutHabitsInput;

    @Field(() => UserCreateOrConnectWithoutHabitsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput;

    @Field(() => UserUpsertWithoutHabitsInput, {nullable:true})
    upsert?: UserUpsertWithoutHabitsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutHabitsInput, {nullable:true})
    update?: UserUpdateWithoutHabitsInput;
}
